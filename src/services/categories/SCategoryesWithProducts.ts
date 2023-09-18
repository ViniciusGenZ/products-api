import { Category } from '@entities/category';
import { ICategoryFilter } from '@interfaces/ICategoryFilters';
import RGetAlCategoriesWithProducts from '@repositories/categories/RGetAlCategoriesWithProducts';

interface IResponse {
	count: number;
	rows: Array<Category>;
}

async function SGetAllCategoriesWithProducts(
	input: ICategoryFilter,
): Promise<IResponse> {
	return RGetAlCategoriesWithProducts(input);
}

export default SGetAllCategoriesWithProducts;
