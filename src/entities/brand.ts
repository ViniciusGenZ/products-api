import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	JoinColumn,
	OneToMany,
} from 'typeorm';
import { Base } from './base';
import { CategoryHasBrands } from './categoryHasBrands';
import { ProductHasBrands } from './productHasBrands';

@Entity({ name: 'brands' })
export class Brand extends Base {
	@PrimaryGeneratedColumn()
	id_brand: number;

	@Column({ nullable: true })
	internal_code?: number;

	@Column({ nullable: true, type: 'text' })
	description_br?: string;

	@Column({ nullable: true, type: 'text' })
	description_en?: string;

	@Column({ nullable: true, type: 'text' })
	description_py?: string;

	@Column({ nullable: true, type: 'text' })
	observation_br?: string;

	@Column({ nullable: true, type: 'text' })
	observation_en?: string;

	@Column({ nullable: true, type: 'text' })
	observation_py?: string;

	@Column({ nullable: true })
	name_en?: string;

	@Column()
	name_py: string;

	@Column({ nullable: true })
	name_br?: string;

	@OneToMany(() => CategoryHasBrands, (c) => c.brand)
	@JoinColumn({
		name: 'id_brand',
		referencedColumnName: 'id_brand',
	})
	categoryHasBrands: Array<CategoryHasBrands>;

	@OneToMany(() => ProductHasBrands, (x) => x.product)
	@JoinColumn({
		name: 'id_brand',
		referencedColumnName: 'id_brand',
	})
	productHasBrands: Array<ProductHasBrands>;
}
