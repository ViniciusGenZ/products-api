import { IProduct, IPublicProduct } from '@interfaces/IProduct';
import imageProductsRepository from '@repositories/imageProduct';

export function productToPublicResponse(data: IProduct): IPublicProduct {
	const temp: IPublicProduct = {
		status_active: data.status_active,
		created_by: data.created_by,
		updated_by: data.updated_by,
		deleted_by: data.deleted_by,
		created_at: data.created_at,
		updated_at: data.updated_at,
		deleted_at: data.deleted_at,
		id_product: data.id_product,
		stock: data.stock,
		price: data.precio_turista,
		decreto: data.decreto,
		bar_code: data.bar_code,
		code_in: data.code_in,
		status_new: data.status_new,
		state_pre_product: data.state_pre_product,
		internal_id: data.internal_id,
		model: data.model,
		icon_img_url: data.icon_img_url,
		operative_system: data.operative_system,
		serial_number: data.serial_number,
		url_reference: data.url_reference,
		version: data.version,
		qr_code: data.qr_code,
		obs_br: data.obs_br,
		obs_en: data.obs_en,
		obs_py: data.obs_py,
		description_br: data.description_br,
		description_en: data.description_en,
		description_py: data.description_py,
		name_en: data.name_en,
		name_py: data.name_py,
		name_br: data.name_br,
		productHasCategories: data.productHasCategories,
		productHasImages: data.productHasImages,
		productHasColors: data.productHasColors,
		productHasBrands: data.productHasBrands,
		productHasDetails: data.productHasDetails,
	};
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
