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
	const query = RBrands.createQueryBuilder('b');
	query.orderBy('b.name_py', 'ASC');

	if (name) query.andWhere('b.name_py like :name', { name: `%${name}%` });

	const [brands, count] = await query.getManyAndCount();
	return { brands, count };
}

export default RGetAllBrands;
