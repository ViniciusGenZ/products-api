import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	JoinColumn,
	OneToMany,
} from 'typeorm';
import { Base } from './base';
import { ProductHasMaterials } from './productHasMaterials';

@Entity({ name: 'materials' })
export class Material extends Base {
	@PrimaryGeneratedColumn()
	id_material: number;

	@Column({ nullable: true, type: 'text' })
	description_br?: string;

	@Column({ nullable: true, type: 'text' })
	description_en?: string;

	@Column({ nullable: true, type: 'text' })
	description_py?: string;

	@OneToMany(() => ProductHasMaterials, (x) => x.material)
	@JoinColumn({
		name: 'id_material',
		referencedColumnName: 'id_material',
	})
	productHasMaterials: Array<ProductHasMaterials>;
}
