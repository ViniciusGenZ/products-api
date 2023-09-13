import { Product } from '@entities/product';
import { FilterProperties } from '@interfaces/IProductFilters';
import RGetAllProducts from '@repositories/products/RGetAllProducts';

interface IResponse {
	count: number;
	products: Array<Product>;
}

async function SGetAllProducts(input: FilterProperties): Promise<IResponse> {
	const { count, products } = await RGetAllProducts(input);
	return {
		count,
		products: products.map((item) => {
			if (item.productHasImages.length === 0) {
				return {
					...item,
					productHasImages: [
						{
							status_active: true,
							created_by: 1,
							updated_by: 1,
							deleted_by: null,
							created_at: '2023-09-12T19:42:16.065Z',
							updated_at: '2023-09-12T19:42:16.065Z',
							deleted_at: null,
							id_product_image: 0,
							description_br: null,
							description_en: null,
							description_py: null,
							url_image: 'misc/gz/noDisponible.png',
							base_64: null,
						},
					],
				} as unknown as Product;
			}
			return item;
		}),
	};
}

export default SGetAllProducts;
