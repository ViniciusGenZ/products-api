import { Entity, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Product } from './product';
import { Color } from './color';

@Entity({ name: 'product_has_colors' })
export class ProductHasColors extends BaseEntity {
	@Column({ name: 'id_product', primary: true })
	id_product: number;

	@Column({ name: 'id_color', primary: true })
	id_color: number;

	@ManyToOne(() => Product, (c) => c.productHasColors)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	product: Product;

	@ManyToOne(() => Color, (c) => c.productHasColors)
	@JoinColumn({
		name: 'id_color',
		referencedColumnName: 'id_color',
	})
	color: Color;
}
