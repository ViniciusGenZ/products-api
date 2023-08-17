import IOrderByEnum from '@interfaces/IOrderByEnum';
import productRepository from '@repositories/product';

interface props {
	offset: number;
	limit: number;
	name?: string;
	id_product?: number;
	min_price?: number;
	max_price?: number;
	order_by?: IOrderByEnum;
}

async function productsIndexService({
	offset,
	limit,
	name,
	id_product,
	min_price,
	max_price,
	order_by,
}: props) {
	const query = productRepository.createQueryBuilder();
	query.skip(offset);
	query.take(limit);
	// query.select(
	// 	'id_product, stock, price_ven, decreto, code_in, internal_id, obs_br, obs_en, obs_py, description_br, description_en, description_py, name_en, name_py, name_br',
	// );

	if (id_product) query.andWhere('id_product = :id_product', { id_product });
	if (name)
		query.andWhere(
			'name_en like :name or name_py like :name or name_br like :name',
			{ name: `%${name}%` },
		);
	if (min_price) query.andWhere('price_ven >= :min_price', { min_price });
	if (max_price) query.andWhere('price_ven <= :max_price', { max_price });

	if (order_by) {
		switch (order_by) {
			case IOrderByEnum.NAME_ASC:
				query.orderBy('name_py', 'ASC');
				break;
			case IOrderByEnum.NAME_DESC:
				query.orderBy('name_py', 'DESC');
				break;
			case IOrderByEnum.PRICE_ASC:
				query.orderBy('price_ven', 'ASC');
				break;
			case IOrderByEnum.PRICE_DESC:
				query.orderBy('price_ven', 'DESC');
				break;
			case IOrderByEnum.POPULARITY_ASC:
			case IOrderByEnum.POPULARITY_DESC:
				break;
			default:
				break;
		}
	}

	return query.getMany();
}

export default productsIndexService;
