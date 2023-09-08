import { Product } from '@entities/product';
import { FilterProperties } from '@interfaces/IProductFilters';
import RGetAllProducts from '@repositories/products/RGetAllProducts';

interface IResponse {
	count: number;
	products: Array<Product>;
}

async function SGetAllProducts(input: FilterProperties): Promise<IResponse> {
	return RGetAllProducts(input);
}

export default SGetAllProducts;
