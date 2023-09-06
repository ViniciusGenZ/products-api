import { Entity, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';

import { Category } from './category';
import { Product } from './product';

@Entity({ name: 'product_has_categories' })
export class ProductHasCategories extends BaseEntity {
	@Column({ name: 'id_product', primary: true })
	id_product: number;

	@Column({ name: 'id_category', primary: true })
	id_category: number;

	@ManyToOne(() => Category, (c) => c.productHasCategories)
	@JoinColumn({
		name: 'id_category',
		referencedColumnName: 'id_category',
	})
	category: Category;

	@ManyToOne(() => Product, (c) => c.productHasCategories)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	product: Product;
}
