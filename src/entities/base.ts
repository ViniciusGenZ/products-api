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

	@Column({ nullable: true })
	deleted_by: number;

	@CreateDateColumn()
	created_at: number;

	@UpdateDateColumn()
	updated_at: number;

	@DeleteDateColumn()
	deleted_at: number;
}
