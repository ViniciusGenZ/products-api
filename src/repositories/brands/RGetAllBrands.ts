import { Brand } from '@entities/brand';
import RBrands from './RBrands';

interface IProps {
	name?: string;
}

interface IResponse {
	count: number;
	brands: Array<Brand>;
}

async function RGetAllBrands({ name }: IProps): Promise<IResponse> {
	const query = RBrands.createQueryBuilder();

	if (name)
		query.andWhere(
			'name_en like :name or name_py like :name or name_br like :name',
			{ name: `%${name}%` },
		);
	const [brands, count] = await query.getManyAndCount();
	return { brands, count };
}

export default RGetAllBrands;
