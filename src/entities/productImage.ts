import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	JoinColumn,
} from 'typeorm';
import { Base } from './base';
import { ProductHasImages } from './productHasImages';
import { ProductHasDetails } from './productHasDetails';

@Entity({ name: 'product_images' })
export class ProductImage extends Base {
	@PrimaryGeneratedColumn()
	id_product_image: number;

	@Column({ nullable: true })
	description_br?: string;

	@Column({ nullable: true })
	description_en?: string;

	@Column({ nullable: true })
	description_py?: string;

	@Column({ nullable: true })
	url_image?: string;

	@Column({ nullable: true })
	base_64?: string;

	@OneToMany(() => ProductHasImages, (x) => x.image)
	@JoinColumn({
		name: 'id_product_image',
		referencedColumnName: 'id_product_image',
	})
	productHasImages: Array<ProductHasImages>;

	@OneToMany(() => ProductHasDetails, (x) => x.product_image)
	@JoinColumn({
		name: 'id_product_image',
		referencedColumnName: 'id_product_image',
	})
	productHasDetails: Array<ProductHasDetails>;
}
