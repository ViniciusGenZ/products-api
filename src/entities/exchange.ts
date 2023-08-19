import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { Base } from './base';
import { Currency } from './currency';

@Entity({ name: 'exchanges' })
export class Exchange extends Base {
	@PrimaryGeneratedColumn()
	id_exchange: number;

	@Column({ type: 'decimal' })
	amount_buy: number;

	@Column({ type: 'decimal', nullable: true })
	amount_sell: number;

	@Column()
	id_currency: number;

	@ManyToOne(() => Currency, (x) => x.exchanges)
	@JoinColumn({
		name: 'id_currency',
		referencedColumnName: 'id_currency',
	})
	currency: Currency;
}
