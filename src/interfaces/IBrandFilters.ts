import { IOrderByEnum } from './IOrderByEnum';
import { IProductFilterProps } from './IProductFilters';

export type IBrandFilterProps = {
	name?: string | Array<string>;
	order_by?: IOrderByEnum;
	products?: IProductFilterProps & {
		exclude?: IProductFilterProps;
	};
};

export interface IBrandFilter extends IBrandFilterProps {
	offset: number;
	limit: number;
	exclude?: IBrandFilterProps;
}
