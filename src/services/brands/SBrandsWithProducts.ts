import { Brand } from '@entities/brand';
import { IBrandFilter } from '@interfaces/IBrandFilters';
import RGetAllBrandsWithProducts from '@repositories/brands/RGetAllBrandsWithProducts';

interface IResponse {
	count: number;
	rows: Array<Brand>;
}

async function SGetAllBrandsWithProducts(
	input: IBrandFilter,
): Promise<IResponse> {
	return RGetAllBrandsWithProducts(input);
}

export default SGetAllBrandsWithProducts;
