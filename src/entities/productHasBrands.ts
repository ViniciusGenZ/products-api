import { Entity, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';

import { Brand } from './brand';
import { Product } from './product';

@Entity({ name: 'product_has_brands' })
export class ProductHasBrands extends BaseEntity {
	@Column({ name: 'id_product', primary: true })
	id_product: number;

	@Column({ name: 'id_brand', primary: true })
	id_brand: number;

	@ManyToOne(() => Brand, (c) => c.categoryHasBrands)
	@JoinColumn({
		name: 'id_brand',
		referencedColumnName: 'id_brand',
	})
	brand: Brand;

	@ManyToOne(() => Product, (c) => c.productsHasBrands)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	product: Product;
}
