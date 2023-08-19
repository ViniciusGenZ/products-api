import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	JoinColumn,
} from 'typeorm';
import { Base } from './base';
import { Exchange } from './exchange';

@Entity({ name: 'currencies' })
export class Currency extends Base {
	@PrimaryGeneratedColumn()
	id_currency: number;

	@Column({ nullable: true })
	name_en?: string;

	@Column()
	name_py: string;

	@Column({ nullable: true })
	name_br?: string;

	@OneToMany(() => Exchange, (x) => x.currency)
	@JoinColumn({
		name: 'id_exchange',
		referencedColumnName: 'id_exchange',
	})
	exchanges: Array<Exchange>;
}
