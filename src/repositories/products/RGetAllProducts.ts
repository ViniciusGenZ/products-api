import { IOrderByEnum } from '@interfaces/IOrderByEnum';
import RProducts from './RProducts';
import { Product } from '@entities/product';
import { ProductHasCategories } from '@entities/productHasCategories';
// import { Category } from '@entities/category';
// import RProductsHasCategories from '@repositories/productsHasCategories/RProductsHasCategories';

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
}: // brand_id,
IProps): Promise<IResponse> {
	const query = RProducts.createQueryBuilder('prod');
	query.skip(offset);
	query.take(limit);
	query.andWhere('prod.status_active = true');
	// query.select(
	// 	'id_product, stock, price_ven, decreto, code_in, internal_id, obs_br, obs_en, obs_py, description_br, description_en, description_py, name_en, name_py, name_br',
	// );

	if (id_category) {
		query.innerJoin(
			ProductHasCategories,
			'phc',
			'prod.id_product = phc.id_product and phc.id_category = :id_category',
			{ id_category },
		);
	}
	if (id_product)
		query.andWhere('prod.id_product = :id_product', { id_product });
	if (name)
		query.andWhere(
			'prod.name_en like :name_en or prod.name_py like :name_py or prod.name_br like :name_br',
			{
				name_en: `%${name}%`,
				name_py: `%${name}%`,
				name_br: `%${name}%`,
			},
		);
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
