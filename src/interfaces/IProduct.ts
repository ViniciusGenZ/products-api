export interface IProduct {
	id_product: number;
	stock: number;
	price_ven: number;
	decreto: boolean;
	bar_code?: number;
	code_in?: number;
	status_new?: boolean;
	state_pre_product?: boolean;
	internal_id?: string;
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
}
