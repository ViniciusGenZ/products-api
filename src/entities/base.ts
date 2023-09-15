import {
	BaseEntity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
} from 'typeorm';

export class Base extends BaseEntity {
	@Column({ default: true })
	status_active: boolean;

	@Column()
	created_by: number;

	@Column({ nullable: true })
	updated_by: number;

	@Column({ type: 'int', nullable: true })
	deleted_by: number | null;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date | null;
}
