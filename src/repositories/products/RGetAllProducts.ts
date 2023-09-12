import { IOrderByEnum } from '@interfaces/IOrderByEnum';
import RProducts from './RProducts';
import { Product } from '@entities/product';
import { ProductHasCategories } from '@entities/productHasCategories';
import { Category } from '@entities/category';
import { ProductImage } from '@entities/productImage';
import { ProductHasImages } from '@entities/productHasImages';
import { Color } from '@entities/color';
import { ProductHasColors } from '@entities/productHasColors';
import { Brand } from '@entities/brand';
import { ProductHasBrands } from '@entities/productHasBrands';
import { ProductHasDetails } from '@entities/productHasDetails';
import { Detail } from '@entities/details';
import { FilterProperties, FilterProps } from '@interfaces/IProductFilters';

interface IResponse {
	count: number;
	products: Array<Product>;
}

function generateQuery(
	alias: string,
	{
		name,
		id_product,
		min_price,
		max_price,
		id_category,
		id_brand,
	}: FilterProps,
) {
	const query = RProducts.createQueryBuilder(alias);
	query.andWhere(`${alias}.status_active = true`);
	query.andWhere(`${alias}.stock > 0`);
	query.leftJoinAndMapMany(
		`${alias}.productHasCategories`,
		ProductHasCategories,
		`${alias}_phc`,
		`${alias}.id_product = ${alias}_phc.id_product`,
	);
	query.leftJoinAndMapMany(
		`${alias}.productHasCategories.category`,
		Category,
		`${alias}_cat`,
		`${alias}_phc.id_category = ${alias}_cat.id_category and ${alias}_cat.status_active = true`,
	);
	query.leftJoinAndMapMany(
		`${alias}.productHasImages`,
		ProductHasImages,
		`${alias}_phi`,
		`${alias}.id_product = ${alias}_phi.id_product`,
	);
	query.leftJoinAndMapMany(
		`${alias}.productHasImages.image`,
		ProductImage,
		`${alias}_ima`,
		`${alias}_phi.id_product_image = ${alias}_ima.id_product_image and ${alias}_ima.status_active = true`,
	);
	query.leftJoinAndMapMany(
		`${alias}.productHasColors`,
		ProductHasColors,
		`${alias}_phc2`,
		`${alias}.id_product = ${alias}_phc2.id_product`,
	);
	query.leftJoinAndMapMany(
		`${alias}.productHasColors.color`,
		Color,
		`${alias}_c`,
		`${alias}_phc2.id_color = ${alias}_c.id_color and ${alias}_c.status_active = true`,
	);
	query.leftJoinAndMapMany(
		`${alias}.productHasBrands`,
		ProductHasBrands,
		`${alias}_phb`,
		`${alias}.id_product = ${alias}_phb.id_product`,
	);
	query.leftJoinAndMapMany(
		`${alias}.productHasBrands.brand`,
		Brand,
		`${alias}_b`,
		`${alias}_phb.id_brand = ${alias}_b.id_brand and ${alias}_b.status_active = true`,
	);
	query.leftJoinAndMapMany(
		`${alias}.productHasDetails`,
		ProductHasDetails,
		`${alias}_phd`,
		`${alias}.id_product = ${alias}_phd.id_product`,
	);
	query.leftJoinAndMapMany(
		`${alias}_phd.detail`,
		Detail,
		`${alias}_d`,
		`${alias}_phd.id_detail = ${alias}_d.id_detail and ${alias}_d.status_active = true`,
	);
	if (id_category)
		query.andWhere(
			`${alias}_phc.id_category ${
				Array.isArray(id_category) ? `in (:id_category)` : `= :id_category`
			}`,
			{ id_category },
		);

	if (id_brand)
		query.andWhere(
			`${alias}_phb.id_brand ${
				Array.isArray(id_brand) ? `in (:id_brand)` : `= :id_brand`
			} `,
			{ id_brand },
		);

	if (id_product)
		query.andWhere(
			`${alias}.id_product ${
				Array.isArray(id_product) ? `in (:id_product)` : `= :id_product`
			}`,
			{ id_product },
		);

	if (name)
		query.andWhere(`${alias}.name_py like :name_py`, {
			name_py: `%${name}%`,
		});
	if (min_price)
		query.andWhere(`${alias}.price_ven >= :min_price`, { min_price });
	if (max_price)
		query.andWhere(`${alias}.price_ven <= :max_price`, { max_price });
	return query;
}

async function RGetAllProducts({
	offset,
	limit,
	name,
	id_product,
	min_price,
	max_price,
	order_by,
	id_category,
	id_brand,
	exclude,
}: FilterProperties): Promise<IResponse> {
	const query = generateQuery('prod', {
		name,
		id_product,
		min_price,
		max_price,
		id_category,
		id_brand,
	});
	query.skip(offset);
	query.take(limit);

	if (exclude) {
		const subquery = await generateQuery('sub', exclude)
			.select('sub.id_product')
			.execute();
		const ids: Array<number> = subquery.map(
			(item: { sub_id_product: number }) => item.sub_id_product,
		);
		if (ids.length > 0)
			query.andWhere(`prod.id_product not in (:ids)`, { ids });
	}

	if (order_by) {
		switch (order_by) {
			case IOrderByEnum.NAME_ASC:
				query.orderBy('prod.name_py', 'ASC');
				break;
			case IOrderByEnum.NAME_DESC:
				query.orderBy('prod.name_py', 'DESC');
				break;
			case IOrderByEnum.PRICE_ASC:
				query.orderBy('prod.price_ven', 'ASC');
				break;
			case IOrderByEnum.PRICE_DESC:
				query.orderBy('prod.price_ven', 'DESC');
				break;
			default:
				break;
		}
	}

	const [products, count] = await query.getManyAndCount();

	return { count, products };
}

export default RGetAllProducts;
