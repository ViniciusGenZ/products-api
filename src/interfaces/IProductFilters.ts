import { IOrderByEnum } from './IOrderByEnum';

export type FilterProps = {
	name?: string | Array<string>;
	id_product?: number | Array<number>;
	id_category?: number | Array<number>;
	id_brand?: number | Array<number>;
	min_price?: number;
	max_price?: number;
	order_by?: IOrderByEnum;
};

export interface FilterProperties extends FilterProps {
	offset: number;
	limit: number;
	exclude: FilterProps;
}
