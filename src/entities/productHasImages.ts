import { Entity, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Product } from './product';
import { ProductImage } from './productImage';

@Entity({ name: 'product_has_images' })
export class ProductHasImages extends BaseEntity {
	@Column({ name: 'id_product', primary: true })
	id_product: number;

	@Column({ name: 'id_product_image', primary: true })
	id_product_image: number;

	@ManyToOne(() => Product, (p) => p.productHasImages)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	product: Product;

	@ManyToOne(() => ProductImage, (i) => i.productHasImages)
	@JoinColumn({
		name: 'id_product_image',
		referencedColumnName: 'id_product_image',
	})
	image: ProductImage;
}
