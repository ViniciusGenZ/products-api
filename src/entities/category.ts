import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	JoinColumn,
} from 'typeorm';
import { Base } from './base';
import { CategoryHasBrands } from './categoryHasBrands';

@Entity({ name: 'categories' })
export class Category extends Base {
	@PrimaryGeneratedColumn()
	id_category: number;

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

	@OneToMany(() => CategoryHasBrands, (c) => c.category)
	@JoinColumn({
		name: 'id_category',
		referencedColumnName: 'id_category',
	})
	categoryHasBrands: Array<CategoryHasBrands>;
}
