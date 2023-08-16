import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
	JoinColumn,
} from 'typeorm';

import { Base } from './base';
import { ProductDetail } from './productDetail';
import { ProductHasColors } from './productHasColors';

@Entity({ name: 'colors' })
export class Color extends Base {
	@PrimaryGeneratedColumn()
	id_color: number;

	@Column({ nullable: true })
	hexa?: string;

	@Column()
	name_py: string;

	@Column({ nullable: true })
	name_en?: string;

	@Column({ nullable: true })
	name_br?: string;

	@OneToMany(() => ProductHasColors, (x) => x.color)
	@JoinColumn({
		name: 'id_color',
		referencedColumnName: 'id_color',
	})
	productHasColors: Array<ProductHasColors>;

	@OneToMany(() => ProductDetail, (x) => x.product)
	@JoinColumn({
		name: 'id_color',
		referencedColumnName: 'id_color',
	})
	productDetails: Array<ProductDetail>;
}
