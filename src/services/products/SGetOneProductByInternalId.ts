import RGetOneProductByInternalId from '@repositories/products/RGetOneProductByInternalCode';

async function SGetOneProductByInternalId(internal_id: number) {
	return RGetOneProductByInternalId(internal_id);
}

export default SGetOneProductByInternalId;
