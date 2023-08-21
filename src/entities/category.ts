import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	JoinColumn,
	ManyToOne,
} from 'typeorm';
import { Base } from './base';
import { ProductHasCategories } from './productHasCategories';

@Entity({ name: 'categories' })
export class Category extends Base {
	@PrimaryGeneratedColumn()
	id_category: number;

	@Column({ nullable: true })
	id_parent: number;

	@Column({ nullable: true })
	internal_code?: number;

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

	@OneToMany(() => ProductHasCategories, (c) => c.category)
	@JoinColumn({
		name: 'id_category',
		referencedColumnName: 'id_category',
	})
	categoryHasBrands: Array<ProductHasCategories>;

	@ManyToOne(() => Category, (c) => c.parent)
	@JoinColumn({ name: 'id_parent', referencedColumnName: 'id_category' })
	parent: ProductHasCategories;

	@OneToMany(() => Category, (c) => c.children)
	@JoinColumn({ name: 'id_category', referencedColumnName: 'id_parent' })
	children: Array<ProductHasCategories>;
}
