import { IBrandFilter } from '@interfaces/IBrandFilters';
import RProducts from '@repositories/products/RProducts';
import { Between, In, MoreThan } from 'typeorm';
import includeAndExclude from '@adapters/includeAndExclude';
import { Category } from '@entities/category';
import RCategories from './RCategories';

interface IResponse {
	count: number;
	rows: Array<Category>;
}

async function RGetAlCategoriesWithProducts({
	offset,
	limit,
	name,
	id_product,
	internal_id,
	id_category,
	id_brand,
	min_price,
	max_price,
	exclude,
}: IBrandFilter): Promise<IResponse> {
	const [products, count] = await RProducts.findAndCount({
		select: {
			id_product: true,
			internal_id: true,
			name_py: true,
			precio_atacado: true,
			precio_mayorista: true,
			precio_turista: true,
			precio_web: true,
			stock: true,
			productHasCategories: {
				id_category: true,
				category: {
					name_py: true,
				},
			},
		},
		relations: {
			productHasCategories: {
				category: true,
			},
		},
		where: {
			status_active: true,
			stock: MoreThan(0),
			name_py: includeAndExclude(name, exclude?.name),
			id_product: includeAndExclude(id_product, exclude?.id_product),
			internal_id: includeAndExclude(internal_id, exclude?.internal_id),
			precio_turista: Between(min_price ?? 0, max_price ?? 99999999),
			productHasBrands: {
				id_brand: includeAndExclude(id_brand, exclude?.id_brand),
			},
			productHasCategories: {
				id_category: includeAndExclude(id_category, exclude?.id_category),
			},
		},
		order: {
			productHasCategories: {
				category: {
					name_py: 'ASC',
				},
			},
			name_py: 'ASC',
		},
		take: limit,
		skip: offset,
	});

	const categoriesIds = products
		.map((item) => item.productHasCategories.map((item2) => item2.id_category))
		.flat();

	const categories = await RCategories.find({
		where: {
			id_category: In(categoriesIds),
		},
		select: {
			id_category: true,
			name_py: true,
		},
		order: {
			name_py: 'ASC',
		},
	});

	const rows = categories.map((item) => {
		const temp = {
			...item,
			producthasCategories: products.filter((item2) =>
				item2.productHasCategories.some(
					(item3) => item3.id_category == item.id_category,
				),
			),
		};
		return temp as unknown as Category;
	});

	return { count, rows };
}

export default RGetAlCategoriesWithProducts;
