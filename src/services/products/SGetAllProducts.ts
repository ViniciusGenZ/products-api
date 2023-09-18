import { productToResponse } from '@adapters/productToResponse';
import { IProduct, IPublicProduct } from '@interfaces/IProduct';
import { IProductFilter } from '@interfaces/IProductFilters';
import RGetAllProducts from '@repositories/products/RGetAllProducts';

interface IResponse {
	count: number;
	products: Array<IProduct | IPublicProduct>;
}

async function SGetAllProducts(input: IProductFilter): Promise<IResponse> {
	const { count, products } = await RGetAllProducts(input);

	return {
		count,
		products:
			products.length > 0
				? products.map((item: IProduct) => productToResponse(item))
				: products,
	};
}

export default SGetAllProducts;
