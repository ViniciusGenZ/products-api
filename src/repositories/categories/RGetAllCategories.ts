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
	const query = RCategories.createQueryBuilder();

	if (name)
		query.andWhere(
			'name_en like :name or name_py like :name or name_br like :name',
			{ name: `%${name}%` },
		);
	const [categories, count] = await query.getManyAndCount();
	return { categories, count };
}

export default RGetAllCategories;
