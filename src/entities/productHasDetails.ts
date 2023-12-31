import { Entity, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Product } from './product';
import { Detail } from './details';
import { Color } from './color';
import { ProductImage } from './productImage';

@Entity({ name: 'product_has_details' })
export class ProductHasDetails extends BaseEntity {
	@Column({ name: 'id_product', primary: true })
	id_product: number;

	@Column({ nullable: true, type: 'text' })
	name_br?: string;

	@Column({ nullable: true, type: 'text' })
	name_en?: string;

	@Column({ type: 'text' })
	name_py: string;

	@ManyToOne(() => Product, (c) => c.productHasDetails)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	product: Product;

	@Column({ name: 'id_detail', primary: true })
	id_detail: number;

	@ManyToOne(() => Detail, (c) => c.productHasDetails)
	@JoinColumn({
		name: 'id_detail',
		referencedColumnName: 'id_detail',
	})
	detail: Detail;

	@Column({ name: 'id_color', nullable: true })
	id_color: number;

	@ManyToOne(() => Color, (x) => x.productHasDetails)
	@JoinColumn({
		name: 'id_color',
		referencedColumnName: 'id_color',
	})
	color: Color;

	@Column({ name: 'id_product_image', nullable: true })
	id_product_image: number;

	@ManyToOne(() => ProductImage, (x) => x.productHasDetails)
	@JoinColumn({
		name: 'id_product_image',
		referencedColumnName: 'id_product_image',
	})
	product_image: ProductImage;
}
