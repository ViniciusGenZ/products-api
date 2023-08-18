import getOneById from '@repositories/products/RGetOneProductByInternalCode';

async function SGetOneProductById(id: number) {
	return getOneById(id);
}

export default SGetOneProductById;
