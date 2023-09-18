import { IProduct } from '@interfaces/IProduct';
import imageProductsRepository from '@repositories/imageProduct';

export function productToResponse(data: IProduct): IProduct {
	const temp: IProduct = data;
	if (data.productHasImages.length === 0 || data.productHasImages === undefined)
		temp.productHasImages = [
			imageProductsRepository.create({
				status_active: true,
				created_by: 1,
				updated_by: 1,
				deleted_by: null,
				created_at: new Date('2023-09-12T19:42:16.065Z'),
				updated_at: new Date('2023-09-12T19:42:16.065Z'),
				deleted_at: null,
				id_product_image: 0,
				description_br: undefined,
				description_en: undefined,
				description_py: undefined,
				url_image: 'misc/gz/noDisponible.png',
				base_64: undefined,
			}),
		];
	return temp;
}
