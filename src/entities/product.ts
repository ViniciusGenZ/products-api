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
import { ProductHasMaterials } from './productHasMaterials';
import { ProductHasColors } from './productHasColors';
import { ProductHasDetails } from './productHasDetails';
import { ProductHasCategories } from './productHasCategories';

@Entity({ name: 'products' })
export class Product extends Base {
	@PrimaryGeneratedColumn()
	id_product: number;

	@Column({ default: 0 })
	stock: number;

	@Column({ type: 'decimal', precision: 10, scale: 2 })
	precio_atacado: number;

	@Column({ type: 'decimal', precision: 10, scale: 2 })
	precio_turista: number;

	@Column({ type: 'decimal', precision: 10, scale: 2 })
	precio_web: number;

	@Column({ type: 'decimal', precision: 10, scale: 2 })
	precio_mayorista: number;

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
	internal_id?: number;

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

	@OneToMany(() => ProductHasCategories, (x) => x.product)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	productHasCategories: Array<ProductHasCategories>;

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
	productHasBrands: Array<ProductHasBrands>;

	@OneToMany(() => ProductHasMaterials, (x) => x.product)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	productHasMaterials: Array<ProductHasMaterials>;

	@OneToMany(() => ProductHasColors, (x) => x.product)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	productHasColors: Array<ProductHasColors>;

	@OneToMany(() => ProductHasDetails, (x) => x.product)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	productHasDetails: Array<ProductHasDetails>;
}
