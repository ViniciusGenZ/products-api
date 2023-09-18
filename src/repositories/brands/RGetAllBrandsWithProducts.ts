import { Brand } from '@entities/brand';
import { IBrandFilter } from '@interfaces/IBrandFilters';
import RProducts from '@repositories/products/RProducts';
import RBrands from './RBrands';
import { Between, In, MoreThan } from 'typeorm';
import filterAdapter from '@adapters/filterAdapter';

interface IResponse {
	count: number;
	rows: Array<Brand>;
}

async function RGetAllBrandsWithProducts({
	offset,
	limit,
	name,
	id_product,
	internal_id,
	id_category,
	id_brand,
	min_price,
	max_price,
}: IBrandFilter): Promise<IResponse> {
	const [products, count] = await RProducts.findAndCount({
		where: {
			status_active: true,
			stock: MoreThan(0),
			name_py: filterAdapter(name),
			id_product: filterAdapter(id_product),
			internal_id: filterAdapter(internal_id),
			precio_turista: Between(min_price ?? 0, max_price ?? 99999999),
			productHasBrands: {
				id_brand: filterAdapter(id_brand),
			},
			productHasCategories: {
				id_category: filterAdapter(id_category),
			},
		},
		select: {
			id_product: true,
			internal_id: true,
			name_py: true,
			precio_atacado: true,
			precio_mayorista: true,
			precio_turista: true,
			precio_web: true,
			productHasBrands: {
				id_brand: true,
			},
		},
		relations: {
			productHasBrands: {
				brand: true,
			},
		},
		order: {
			productHasBrands: {
				brand: {
					name_py: 'ASC',
				},
			},
			name_py: 'ASC',
		},
		take: limit,
		skip: offset,
	});

	const brandsIds = products
		.map((item) => item.productHasBrands.map((item2) => item2.id_brand))
		.flat();

	const brands = await RBrands.find({
		where: {
			id_brand: In(brandsIds),
		},
		select: {
			id_brand: true,
			name_py: true,
		},
		order: {
			name_py: 'ASC',
		},
	});

	const rows = brands.map(
		(item) =>
			({
				...item,
				productHasBrands: products.filter((item2) =>
					item2.productHasBrands.some(
						(item3) => item3.id_brand == item.id_brand,
					),
				),
			}) as unknown as Brand,
	);

	return { count, rows };
}

export default RGetAllBrandsWithProducts;
