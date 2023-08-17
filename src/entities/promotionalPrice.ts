import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Base } from './base';

@Entity({ name: 'promotional_price' })
export class PromotionalPrice extends Base {
	@PrimaryGeneratedColumn()
	id_promotional_price: number;

	@Column()
	price: number;

	@Column()
	startingDateTime: Date;

	@Column()
	endingDateTime: Date;
}
