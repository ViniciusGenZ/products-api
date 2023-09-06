import RGetOneProductById from '@repositories/products/RGetOneProductById';

async function SGetOneProductById(id: number) {
	return RGetOneProductById(id);
}

export default SGetOneProductById;
