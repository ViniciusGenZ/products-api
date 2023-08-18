import { Product } from '@entities/product';
import { IOrderByEnum } from '@interfaces/IOrderByEnum';
import RGetAllProducts from '@repositories/products/RGetAllProducts';

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

async function SGetAllProducts(input: IProps): Promise<IResponse> {
	return RGetAllProducts(input);
}

export default SGetAllProducts;
