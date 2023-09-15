import { IProduct } from './IProduct';

export interface IProductsGroupedByBrands {
	count: number;
	rows: Array<{
		name: string;
		products: IProduct;
	}>;
}
