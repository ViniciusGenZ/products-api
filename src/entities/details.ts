import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	JoinColumn,
	OneToMany,
} from 'typeorm';

import { Base } from './base';
import { ProductHasDetails } from './productHasDetails';

@Entity({ name: 'details' })
export class Detail extends Base {
	@PrimaryGeneratedColumn()
	id_detail: number;

	@Column({ nullable: true })
	internal_id?: number;

	@Column({ nullable: true, type: 'text' })
	name_br?: string;

	@Column({ nullable: true, type: 'text' })
	name_en?: string;

	@Column({ type: 'text' })
	name_py?: string;

	@Column({ nullable: true, type: 'text' })
	description_br?: string;

	@Column({ nullable: true, type: 'text' })
	description_en?: string;

	@Column({ nullable: true, type: 'text' })
	description_py?: string;

	@OneToMany(() => ProductHasDetails, (x) => x.detail)
	@JoinColumn({
		name: 'id_detail',
		referencedColumnName: 'id_detail',
	})
	productHasDetails: Array<ProductHasDetails>;
}
