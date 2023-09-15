import { IOrderByEnum } from '@interfaces/IOrderByEnum';
import { ProductHasBrands } from '@entities/productHasBrands';
import RBrands from '@repositories/brands/RBrands';
import { Brand } from '@entities/brand';
import { IBrandFilter, IBrandFilterProps } from '@interfaces/IBrandFilters';
import { Product } from '@entities/product';
import { ProductHasCategories } from '@entities/productHasCategories';
import { Category } from '@entities/category';
import { ProductHasImages } from '@entities/productHasImages';
import { ProductImage } from '@entities/productImage';
import { ProductHasColors } from '@entities/productHasColors';
import { Color } from '@entities/color';

interface IResponse {
	count: number;
	rows: Array<Brand>;
}

function generateQuery(alias: string, { name, products }: IBrandFilterProps) {
	const query = RBrands.createQueryBuilder(alias);
	query.andWhere(`${alias}.status_active = true`);
	query.andWhere(`${alias}.name_py not like :general`, {
		general: '%geral%',
	});

	query.leftJoinAndMapMany(
		`${alias}.productHasBrands`,
		ProductHasBrands,
		`${alias}_phb`,
		`${alias}.id_brand = ${alias}_phb.id_brand`,
	);

	query.leftJoinAndMapMany(
		`${alias}.productHasBrands.product`,
		Product,
		`${alias}_p`,
		`${alias}_phb.id_product = ${alias}_p.id_product and ${alias}_p.status_active = true`,
	);

	query.leftJoinAndMapMany(
		`${alias}_p.productHasCategories`,
		ProductHasCategories,
		`${alias}_phc`,
		`${alias}_p.id_product = ${alias}_phc.id_product`,
	);

	query.leftJoinAndMapMany(
		`${alias}_p.productHasCategories.category`,
		Category,
		`${alias}_cat`,
		`${alias}_phc.id_category = ${alias}_cat.id_category and ${alias}_cat.status_active = true`,
	);

	query.leftJoinAndMapMany(
		`${alias}_p.productHasImages`,
		ProductHasImages,
		`${alias}_phi`,
		`${alias}_p.id_product = ${alias}_phi.id_product`,
	);

	query.leftJoinAndMapMany(
		`${alias}_p.productHasImages.image`,
		ProductImage,
		`${alias}_ima`,
		`${alias}_phi.id_product_image = ${alias}_ima.id_product_image and ${alias}_ima.status_active = true`,
	);

	query.leftJoinAndMapMany(
		`${alias}_p.productHasColors`,
		ProductHasColors,
		`${alias}_phc2`,
		`${alias}_p.id_product = ${alias}_phc2.id_product`,
	);

	query.leftJoinAndMapMany(
		`${alias}_p.productHasColors.color`,
		Color,
		`${alias}_c`,
		`${alias}_phc2.id_color = ${alias}_c.id_color and ${alias}_c.status_active = true`,
	);

	// query.leftJoinAndMapMany(
	// 	`${alias}_p.productHasDetails`,
	// 	ProductHasDetails,
	// 	`${alias}_phd`,
	// 	`${alias}_p.id_product = ${alias}_phd.id_product`,
	// );

	// query.leftJoinAndMapMany(
	// 	`${alias}_p.detail`,
	// 	Detail,
	// 	`${alias}_d`,
	// 	`${alias}_phd.id_detail = ${alias}_d.id_detail and ${alias}_d.status_active = true`,
	// );

	if (name) {
		if (Array.isArray(name)) {
			const f = name.join('|');
			query.andWhere(`${alias}.name_py RLIKE  :name_py`, {
				name_py: `${f}`,
			});
		} else {
			query.andWhere(`${alias}.name_py like :name_py`, {
				name_py: `%${name}%`,
			});
		}
	}

	if (products?.id_category)
		query.andWhere(
			`${alias}_phc.id_category ${
				Array.isArray(products?.id_category)
					? `in (:id_category)`
					: `= :id_category`
			}`,
			{ id_category: products?.id_category },
		);

	if (products?.id_brand)
		query.andWhere(
			`${alias}_phb.id_brand ${
				Array.isArray(products?.id_brand) ? `in (:id_brand)` : `= :id_brand`
			} `,
			{ id_brand: products?.id_brand },
		);

	if (products?.id_product)
		query.andWhere(
			`${alias}.id_product ${
				Array.isArray(products?.id_product)
					? `in (:id_product)`
					: `= :id_product`
			}`,
			{ id_product: products?.id_product },
		);

	if (products?.internal_id)
		query.andWhere(
			`${alias}.internal_id ${
				Array.isArray(products?.internal_id)
					? `in (:internal_id)`
					: `= :internal_id`
			}`,
			{ internal_id: products?.internal_id },
		);

	if (products?.name) {
		if (Array.isArray(products?.name)) {
			const f = products?.name.join('|');
			query.andWhere(
				`${alias}.productHasBrands.product.id_product.name_py RLIKE :name_py`,
				{
					name_py: `${f}`,
				},
			);
		} else {
			query.andWhere(
				`${alias}.productHasBrands.product.id_product.name_py like :name_py`,
				{
					name_py: `%${name}%`,
				},
			);
		}
	}

	if (products?.min_price)
		query.andWhere(`${alias}.price_ven >= :min_price`, {
			min_price: products?.min_price,
		});
	if (products?.max_price)
		query.andWhere(`${alias}.price_ven <= :max_price`, {
			max_price: products?.max_price,
		});
	return query;
}

async function RGetAllBrandsWithProducts({
	offset,
	limit,
	name,
	exclude,
	products,
	order_by,
}: IBrandFilter): Promise<IResponse> {
	const query = generateQuery('brand', {
		name,
		products,
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
			query.andWhere(
				`brand.productHasBrands.product.id_product not in (:ids)`,
				{ ids },
			);
	}

	if (order_by) {
		switch (order_by) {
			case IOrderByEnum.NAME_ASC:
				query.orderBy('brand.name_py', 'ASC');
				break;
			case IOrderByEnum.NAME_DESC:
				query.orderBy('brand.name_py', 'DESC');
				break;
			case IOrderByEnum.PRICE_ASC:
				query.orderBy('brand.price_ven', 'ASC');
				break;
			case IOrderByEnum.PRICE_DESC:
				query.orderBy('brand.price_ven', 'DESC');
				break;
			default:
				break;
		}
	} else {
		query.orderBy('brand.name_py', 'ASC');
	}

	const [rows, count] = await query.getManyAndCount();

	return { count, rows };
}

export default RGetAllBrandsWithProducts;
