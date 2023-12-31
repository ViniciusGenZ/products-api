import { Category } from '@entities/category';
import { IBase } from './IBase';
import { ProductImage } from '@entities/productImage';
import { Color } from '@entities/color';
import { Brand } from '@entities/brand';
import { ProductHasDetails } from '@entities/productHasDetails';

export interface IProduct extends IBase {
	id_product: number;
	stock: number;
	precio_atacado: number;
	precio_turista: number;
	precio_web: number;
	precio_mayorista: number;
	decreto: boolean;
	bar_code?: number;
	code_in?: number;
	status_new?: boolean;
	state_pre_product?: boolean;
	internal_id?: number;
	model?: string;
	icon_img_url?: string;
	operative_system?: string;
	serial_number?: string;
	url_reference?: string;
	version?: string;
	qr_code?: string;
	obs_br?: string;
	obs_en?: string;
	obs_py?: string;
	description_br?: string;
	description_en?: string;
	description_py?: string;
	name_en?: string;
	name_py: string;
	name_br?: string;
	productHasCategories: Array<Category>;
	productHasImages: Array<ProductImage>;
	productHasColors: Array<Color>;
	productHasBrands: Array<Brand>;
	productHasDetails: Array<ProductHasDetails>;
}

export interface IPublicProduct extends IBase {
	id_product: number;
	stock: number;
	price: number;
	decreto: boolean;
	bar_code?: number;
	code_in?: number;
	status_new?: boolean;
	state_pre_product?: boolean;
	internal_id?: number;
	model?: string;
	icon_img_url?: string;
	operative_system?: string;
	serial_number?: string;
	url_reference?: string;
	version?: string;
	qr_code?: string;
	obs_br?: string;
	obs_en?: string;
	obs_py?: string;
	description_br?: string;
	description_en?: string;
	description_py?: string;
	name_en?: string;
	name_py: string;
	name_br?: string;
	productHasCategories: Array<Category>;
	productHasImages: Array<ProductImage>;
	productHasColors: Array<Color>;
	productHasBrands: Array<Brand>;
	productHasDetails: Array<ProductHasDetails>;
}
