import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	JoinColumn,
	ManyToOne,
} from 'typeorm';

import { Base } from './base';
import { Product } from './product';
import { Color } from './color';
import { ProductImage } from './productImage';

@Entity({ name: 'product_details' })
export class ProductDetail extends Base {
	@PrimaryGeneratedColumn()
	id_product_detail: number;

	@Column({ nullable: true, type: 'text' })
	description_br?: string;

	@Column({ nullable: true, type: 'text' })
	description_en?: string;

	@Column({ nullable: true, type: 'text' })
	description_py?: string;

	@Column({ name: 'id_product', primary: true })
	id_product: number;

	@ManyToOne(() => Product, (x) => x.productDetails)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	product: Product;

	@Column({ name: 'id_color', primary: true })
	id_color: number;

	@ManyToOne(() => Color, (x) => x.productDetails)
	@JoinColumn({
		name: 'id_color',
		referencedColumnName: 'id_color',
	})
	color: Color;

	@Column({ name: 'id_product_image', primary: true })
	id_product_image: number;

	@ManyToOne(() => ProductImage, (x) => x.productDetails)
	@JoinColumn({
		name: 'id_product_image',
		referencedColumnName: 'id_product_image',
	})
	productImage: ProductImage;
}
