import { productToPublicResponse } from '@adapters/productToResponse';
import UserContext from '@contexts/userContext';
import RGetOneProductByInternalId from '@repositories/products/RGetOneProductByInternalCode';

async function SGetOneProductByInternalId(internal_id: number) {
	const { decodedUserJwt } = UserContext.getInstance();
	const product = await RGetOneProductByInternalId(internal_id);

	if (decodedUserJwt || !!!product) return product;

	return productToPublicResponse(product);
}

export default SGetOneProductByInternalId;
