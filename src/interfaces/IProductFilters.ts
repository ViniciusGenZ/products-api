import { IOrderByEnum } from './IOrderByEnum';

export type IProductFilterProps = {
	name?: string | Array<string>;
	id_product?: number | Array<number>;
	id_category?: number | Array<number>;
	id_brand?: number | Array<number>;
	internal_id?: number | Array<number>;
	min_price?: number;
	max_price?: number;
	order_by?: IOrderByEnum;
};

export interface IProductFilter extends IProductFilterProps {
	offset: number;
	limit: number;
	exclude?: IProductFilterProps;
}
