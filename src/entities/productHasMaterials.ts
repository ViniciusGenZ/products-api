import { Entity, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';

import { Product } from './product';
import { Material } from './material';

@Entity({ name: 'product_has_materials' })
export class ProductHasMaterials extends BaseEntity {
	@Column({ name: 'id_product', primary: true })
	id_product: number;

	@Column({ name: 'id_material', primary: true })
	id_material: number;

	@ManyToOne(() => Product, (c) => c.productHasMaterials)
	@JoinColumn({
		name: 'id_product',
		referencedColumnName: 'id_product',
	})
	product: Product;

	@ManyToOne(() => Material, (c) => c.productHasMaterials)
	@JoinColumn({
		name: 'id_material',
		referencedColumnName: 'id_material',
	})
	material: Material;
}
