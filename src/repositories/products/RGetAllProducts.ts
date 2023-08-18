import { IOrderByEnum } from '@interfaces/IOrderByEnum';
import RProducts from './RProducts';
import { Product } from '@entities/product';
import { And, FindOptionsOrder, LessThan, Like, MoreThan } from 'typeorm';

interface IProps {
	offset: number;
	limit: number;
	name?: string;
	id_product?: number;
	min_price?: number;
	max_price?: number;
	order_by?: IOrderByEnum;
	category_id?: number;
	brand_id?: number;
}

interface IResponse {
	count: number;
	products: Array<Product>;
}

function orderByHelper(
	input: IOrderByEnum | undefined,
): FindOptionsOrder<Product> | undefined {
	switch (input) {
		case IOrderByEnum.NAME_ASC:
			return { name_en: 'asc' };
		case IOrderByEnum.NAME_DESC:
			return { name_en: 'desc' };
		case IOrderByEnum.PRICE_ASC:
			return { price_ven: 'asc' };
		case IOrderByEnum.PRICE_DESC:
			return { price_ven: 'desc' };
		default:
			return undefined;
	}
}

async function RGetAllProducts({
	offset,
	limit,
	name,
	id_product,
	min_price,
	max_price,
	order_by,
}: // category_id,
// brand_id,
IProps): Promise<IResponse> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let filter: any = {};
	if (min_price) filter.priceFilter = MoreThan(min_price);
	if (max_price) filter.priceFilter = LessThan(max_price);
	if (min_price && max_price)
		filter.priceFilter = And(MoreThan(min_price), LessThan(max_price));

	if (id_product) filter.id_product = id_product;

	if (name) {
		filter = [
			{
				...filter,
				name_en: Like(`%${name}%`),
			},
			{
				...filter,
				name_py: Like(`%${name}%`),
			},
			{
				...filter,
				name_br: Like(`%${name}%`),
			},
		];
	}

	const [products, count] = await RProducts.findAndCount({
		where: filter,
		skip: offset,
		take: limit,
		order: orderByHelper(order_by),
	});

	return { count, products };
}

export default RGetAllProducts;
