import { IProduct } from '@interfaces/IProduct';
import productRepository from './RProducts';

async function RGetOneProductByInternalId(
	internal_id: number,
): Promise<IProduct | undefined> {
	const query = productRepository.createQueryBuilder();
	query.select(
		'id_product, stock, price_ven, decreto, code_in, internal_id, obs_br, obs_en, obs_py, description_br, description_en, description_py, name_en, name_py, name_br',
	);
	query.where('internal_id = :internal_id', { internal_id });
	return query.getRawOne();
}

export default RGetOneProductByInternalId;
