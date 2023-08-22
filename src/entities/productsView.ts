import { DataSource, PrimaryColumn, ViewColumn, ViewEntity } from 'typeorm';
import { Product } from './product';

@ViewEntity({
	materialized: true,
	expression: (ds: DataSource) =>
		ds
			.createQueryBuilder()
			.from(Product, 'prod')
			.addSelect('prod.id_product', 'id_product')
			.addSelect('prod.stock', 'stock')
			.addSelect('prod.price_ven', 'price_ven')
			.addSelect('prod.decreto', 'decreto')
			.addSelect('prod.internal_id', 'internal_id')
			.addSelect('prod.icon_img_url', 'icon_img_url')
			.addSelect('prod.obs_br', 'obs_br')
			.addSelect('prod.obs_en', 'obs_en')
			.addSelect('prod.obs_py', 'obs_py')
			.addSelect('prod.description_br', 'description_br')
			.addSelect('prod.description_en', 'description_en')
			.addSelect('prod.description_py', 'description_py')
			.addSelect('prod.name_en', 'name_en')
			.addSelect('prod.name_py', 'name_py')
			.addSelect('prod.name_br', 'name_br'),
})
export class ProductsView {
	@ViewColumn()
	@PrimaryColumn()
	id_product: number;

	@ViewColumn()
	stock: number;

	@ViewColumn()
	price_ven: number;

	@ViewColumn()
	price_atac: number;

	@ViewColumn()
	price_web: number;

	@ViewColumn()
	price_min: number;

	@ViewColumn()
	decreto: boolean;

	@ViewColumn()
	bar_code?: number;

	@ViewColumn()
	code_in?: number;

	@ViewColumn()
	status_new?: boolean;

	@ViewColumn()
	state_pre_product?: boolean;

	@ViewColumn()
	internal_id?: string;

	@ViewColumn()
	model?: string;

	@ViewColumn()
	icon_img_url?: string;

	@ViewColumn()
	operative_system?: string;

	@ViewColumn()
	serial_number?: string;

	@ViewColumn()
	url_reference?: string;

	@ViewColumn()
	version?: string;

	@ViewColumn()
	qr_code?: string;

	@ViewColumn()
	obs_br?: string;

	@ViewColumn()
	obs_en?: string;

	@ViewColumn()
	obs_py?: string;

	@ViewColumn()
	description_br?: string;

	@ViewColumn()
	description_en?: string;

	@ViewColumn()
	description_py?: string;

	@ViewColumn()
	name_en?: string;

	@ViewColumn()
	name_py: string;

	@ViewColumn()
	name_br?: string;
}
