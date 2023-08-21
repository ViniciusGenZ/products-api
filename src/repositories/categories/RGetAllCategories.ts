import { Category } from '@entities/category';
import RCategories from './RCategories';

interface IProps {
	name?: string;
}

interface IResponse {
	count: number;
	categories: Array<Category>;
}

async function RGetAllCategories({ name }: IProps): Promise<IResponse> {
	const query = RCategories.createQueryBuilder('cat');
	query.andWhere('cat.id_parent is null');
	if (name) query.andWhere('cat.name_py like :name', { name: `%${name}%` });
	const [categories, count] = await query.getManyAndCount();
	return { count, categories };
}

export default RGetAllCategories;
