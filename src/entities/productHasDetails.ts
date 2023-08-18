import { Entity, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Product } from './product';
import { Detail } from './details';
import { Color } from './color';
import { ProductImage } from './productImage';

@Entity({ name: 'product_has_details' })
export class ProductHasDetails extends BaseEntity {
	@Column({ name: 'id_product', primary: true })
	id_product: number;

	@ManyToOne(() => Product, (c) => c.productHasDetails)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	product: Product;

	@Column({ name: 'id_detail', primary: true })
	id_details: number;

	@ManyToOne(() => Detail, (c) => c.productHasDetails)
	@JoinColumn({
		name: 'id_detail',
		referencedColumnName: 'id_detail',
	})
	detail: Detail;

	@Column({ name: 'id_color', primary: true })
	id_color: number;

	@ManyToOne(() => Color, (x) => x.productHasDetails)
	@JoinColumn({
		name: 'id_color',
		referencedColumnName: 'id_color',
	})
	color: Color;

	@Column({ name: 'id_product_image', primary: true })
	id_product_image: number;

	@ManyToOne(() => ProductImage, (x) => x.productHasDetails)
	@JoinColumn({
		name: 'id_product_image',
		referencedColumnName: 'id_product_image',
	})
	product_image: ProductImage;
}
