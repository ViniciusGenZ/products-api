import { Brand } from '@entities/brand';
import { IProductFilter } from '@interfaces/IProductFilters';
import RGetAllBrandsWithProducts from '@repositories/brands/RGetAllBrandsWithProducts';

interface IResponse {
	count: number;
	rows: Array<Brand>;
}

async function SGetAllBrandsWithProducts(
	input: IProductFilter,
): Promise<IResponse> {
	return RGetAllBrandsWithProducts(input);
}

export default SGetAllBrandsWithProducts;
