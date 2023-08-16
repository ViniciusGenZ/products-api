import { Entity, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';

import { Category } from './category';
import { Brand } from './brand';

@Entity({ name: 'category_has_brands' })
export class CategoryHasBrands extends BaseEntity {
	@Column({ name: 'id_brand', primary: true })
	id_brand: number;

	@Column({ name: 'id_category', primary: true })
	id_category: number;

	@ManyToOne(() => Category, (c) => c.categoryHasBrands)
	@JoinColumn({
		name: 'id_category',
		referencedColumnName: 'id_category',
	})
	category: Category;

	@ManyToOne(() => Brand, (c) => c.categoryHasBrands)
	@JoinColumn({
		name: 'id_brand',
		referencedColumnName: 'id_brand',
	})
	brand: Brand;
}
