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

interface IProps {
	offset: number;
	limit: number;
	name?: string;
	id_product?: number;
	min_price?: number;
	max_price?: number;
	order_by?: IOrderByEnum;
	id_category?: number;
	id_brand?: number;
}

interface IResponse {
	count: number;
	products: Array<Product>;
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
}: IProps): Promise<IResponse> {
	const query = RProducts.createQueryBuilder('prod');
	query.skip(offset);
	query.take(limit);
	query.andWhere('prod.status_active = true');
	query.andWhere('prod.stock > 0');
	query.leftJoinAndMapMany(
		'prod.productHasCategories',
		ProductHasCategories,
		'phc',
		'prod.id_product = phc.id_product',
	);
	query.leftJoinAndMapMany(
		'prod.productHasCategories.category',
		Category,
		'cat',
		'phc.id_category = cat.id_category',
	);
	query.leftJoinAndMapMany(
		'prod.productHasImages',
		ProductHasImages,
		'phi',
		'prod.id_product = phi.id_product',
	);
	query.leftJoinAndMapMany(
		'prod.productHasImages.image',
		ProductImage,
		'ima',
		'phi.id_product_image = ima.id_product_image',
	);
	query.leftJoinAndMapMany(
		'prod.productHasColors',
		ProductHasColors,
		'phc2',
		'prod.id_product = phc2.id_product',
	);
	query.leftJoinAndMapMany(
		'prod.productHasColors.color',
		Color,
		'c',
		'phc2.id_color = c.id_color',
	);
	query.leftJoinAndMapMany(
		'prod.productHasBrands',
		ProductHasBrands,
		'phb',
		'prod.id_product = phb.id_product',
	);
	query.leftJoinAndMapMany(
		'prod.productHasBrands.brand',
		Brand,
		'b',
		'phb.id_brand = b.id_brand',
	);
	query.leftJoinAndMapMany(
		'prod.productHasDetails',
		ProductHasDetails,
		'phd',
		'prod.id_product = phd.id_product',
	);
	query.leftJoinAndMapMany(
		'phd.detail',
		Detail,
		'd',
		'phd.id_detail = d.id_detail',
	);

	if (id_category)
		query.andWhere('phc.id_category = :id_category', { id_category });

	if (id_brand) query.andWhere('phb.id_brand = :id_brand', { id_brand });

	if (id_product)
		query.andWhere('prod.id_product = :id_product', { id_product });

	if (name)
		query.andWhere('prod.name_py like :name_py', {
			name_py: `%${name}%`,
		});
	if (min_price) query.andWhere('prod.price_ven >= :min_price', { min_price });
	if (max_price) query.andWhere('prod.price_ven <= :max_price', { max_price });

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
