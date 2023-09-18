import { productToResponse } from '@adapters/productToResponse';
import RGetOneProductByInternalId from '@repositories/products/RGetOneProductByInternalCode';

async function SGetOneProductByInternalId(internal_id: number) {
	const product = await RGetOneProductByInternalId(internal_id);
	if (!product) return null;
	return productToResponse(product);
}

export default SGetOneProductByInternalId;
