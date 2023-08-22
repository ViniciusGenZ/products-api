// import { IOrderByEnum } from '@interfaces/IOrderByEnum';
import RProductsView from './RProductsView';
import { ProductsView } from '@entities/productsView';

// interface IProps {
// 	offset: number;
// 	limit: number;
// 	name?: string;
// 	id_product?: number;
// 	min_price?: number;
// 	max_price?: number;
// 	order_by?: IOrderByEnum;
// 	id_category?: number;
// 	id_brand?: number;
// }

interface IResponse {
	count: number;
	products: Array<ProductsView>;
}

async function RGetAllProductsFromView(): Promise<IResponse> {
	const [products, count] = await RProductsView.findAndCount({
		take: 10,
		skip: 0,
	});

	return { count, products };
}

export default RGetAllProductsFromView;
