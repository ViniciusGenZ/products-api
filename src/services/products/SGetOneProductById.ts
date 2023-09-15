import { productToPublicResponse } from '@adapters/productToResponse';
import UserContext from '@contexts/userContext';
import RGetOneProductById from '@repositories/products/RGetOneProductById';

async function SGetOneProductById(id: number) {
	const { decodedUserJwt } = UserContext.getInstance();
	const product = await RGetOneProductById(id);

	if (decodedUserJwt || !!!product) return product;

	return productToPublicResponse(product);
}

export default SGetOneProductById;
