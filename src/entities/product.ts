import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	JoinColumn,
} from 'typeorm';
import { Base } from './base';
import { ProductHasImages } from './productHasImages';
import { ProductHasBrands } from './productHasBrands';
import { ProductDetail } from './productDetail';
import { ProductHasMaterials } from './productHasMaterials';
import { ProductHasColors } from './productHasColors';

@Entity({ name: 'products' })
export class Product extends Base {
	@PrimaryGeneratedColumn()
	id_product: number;

	@Column({ default: 0 })
	stock: number;

	@Column({ type: 'decimal' })
	price_ven: number;

	@Column({ type: 'decimal' })
	price_atac: number;

	@Column({ type: 'decimal' })
	price_web: number;

	@Column({ type: 'decimal' })
	price_min: number;

	@Column()
	decreto: boolean;

	@Column({ nullable: true })
	bar_code?: number;

	@Column({ nullable: true })
	code_in?: number;

	@Column({ nullable: true })
	status_new?: boolean;

	@Column({ nullable: true })
	state_pre_product?: boolean;

	@Column({ nullable: true })
	internal_id?: string;

	@Column({ nullable: true })
	model?: string;

	@Column({ nullable: true })
	icon_img_url?: string;

	@Column({ nullable: true })
	operative_system?: string;

	@Column({ nullable: true })
	serial_number?: string;

	@Column({ nullable: true })
	url_reference?: string;

	@Column({ nullable: true })
	version?: string;

	@Column({ nullable: true })
	qr_code?: string;

	@Column({ nullable: true, type: 'text' })
	obs_br?: string;

	@Column({ nullable: true, type: 'text' })
	obs_en?: string;

	@Column({ nullable: true, type: 'text' })
	obs_py?: string;

	@Column({ nullable: true, type: 'text' })
	description_br?: string;

	@Column({ nullable: true, type: 'text' })
	description_en?: string;

	@Column({ nullable: true, type: 'text' })
	description_py?: string;

	@Column({ nullable: true })
	name_en?: string;

	@Column()
	name_py: string;

	@Column({ nullable: true })
	name_br?: string;

	@OneToMany(() => ProductHasImages, (x) => x.product)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	productHasImages: Array<ProductHasImages>;

	@OneToMany(() => ProductHasBrands, (x) => x.product)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	productsHasBrands: Array<ProductHasBrands>;

	@OneToMany(() => ProductDetail, (x) => x.product)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	productDetails: Array<ProductDetail>;

	@OneToMany(() => ProductHasMaterials, (x) => x.product)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	productHasMaterials: Array<ProductHasMaterials>;

	@OneToMany(() => ProductHasColors, (x) => x.product)
	@JoinColumn({
		name: 'id_color',
		referencedColumnName: 'id_color',
	})
	productHasColors: Array<ProductHasColors>;
}
