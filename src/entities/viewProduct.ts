import { DataSource, Index, ViewColumn, ViewEntity } from 'typeorm';
import { Product } from './product';

@ViewEntity({
	materialized: true,
	expression: (ds: DataSource) =>
		ds
			.createQueryBuilder()
			.select('p.id_product', 'id_product')
			.addSelect('p.name_py', 'name_py')
			.from(Product, 'p'),
})
export class ViewProduct {
	@ViewColumn()
	id_product: number;

	@Index('name_py')
	@ViewColumn()
	name_py: string;
}
