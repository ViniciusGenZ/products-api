import { productToPublicResponse } from '@adapters/productToResponse';
import UserContext from '@contexts/userContext';
import { IProduct, IPublicProduct } from '@interfaces/IProduct';
import { IProductFilter } from '@interfaces/IProductFilters';
import RGetAllProducts from '@repositories/products/RGetAllProducts';

interface IResponse {
	count: number;
	products: Array<IProduct | IPublicProduct>;
}

async function SGetAllProducts(input: IProductFilter): Promise<IResponse> {
	const { decodedUserJwt } = UserContext.getInstance();
	const { count, products } = await RGetAllProducts(input);

	if (!decodedUserJwt)
		return {
			count,
			products:
				products.length > 0
					? products.map((item: IProduct) => productToPublicResponse(item))
					: products,
		};

	return {
		count,
		products,
	};
}

export default SGetAllProducts;
