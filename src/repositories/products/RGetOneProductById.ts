import RProducts from './RProducts';
import { ProductHasCategories } from '@entities/productHasCategories';
import { Product } from '@entities/product';
import { Category } from '@entities/category';
import { Color } from '@entities/color';
import { ProductHasColors } from '@entities/productHasColors';
import { ProductHasImages } from '@entities/productHasImages';
import { ProductImage } from '@entities/productImage';

async function RGetOneProductById(id: number): Promise<Product | null> {
	const query = RProducts.createQueryBuilder('prod');
	query.andWhere('prod.status_active = true');
	query.andWhere('prod.internal_id = :id', { id });
	query.leftJoinAndMapMany(
		'prod.productHasCategories',
		ProductHasCategories,
		'phc',
		'prod.id_product = phc.id_product',
	);
	query.leftJoinAndMapMany(
		'prod.productHasCategories.category',
		Category,
		'cat',
		'phc.id_category = cat.id_category',
	);
	query.leftJoinAndMapMany(
		'prod.productHasImages',
		ProductHasImages,
		'phi',
		'prod.id_product = phi.id_product',
	);
	query.leftJoinAndMapMany(
		'prod.productHasImages.image',
		ProductImage,
		'ima',
		'phi.id_product_image = ima.id_product_image',
	);
	query.leftJoinAndMapMany(
		'prod.productHasColors',
		ProductHasColors,
		'phc2',
		'prod.id_product = phc2.id_product',
	);
	query.leftJoinAndMapMany(
		'prod.productHasColors.color',
		Color,
		'c',
		'phc2.id_color = c.id_color',
	);
	const product = await query.getOne();
	return product;
}

export default RGetOneProductById;
