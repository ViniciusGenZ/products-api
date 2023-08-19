import RProducts from './RProducts';
import { ProductHasCategories } from '@entities/productHasCategories';
import { Product } from '@entities/product';
import { ProductHasImages } from '@entities/productHasImages';
import { ProductHasColors } from '@entities/productHasColors';
import { Category } from '@entities/category';
import { ProductImage } from '@entities/productImage';
import { Color } from '@entities/color';
import { ProductHasBrands } from '@entities/productHasBrands';
import { Brand } from '@entities/brand';
import { Detail } from '@entities/details';
import { ProductHasDetails } from '@entities/productHasDetails';

async function RGetOneProductByInternalId(
	internal_id: number,
): Promise<Product | null> {
	const query = RProducts.createQueryBuilder('prod');
	query.andWhere('prod.status_active = true');
	query.andWhere('prod.internal_id = :internal_id', { internal_id });
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
		'prod.productHasBrands',
		ProductHasBrands,
		'phb',
		'prod.id_product = phb.id_product',
	);
	query.leftJoinAndMapMany(
		'prod.productHasBrands.brand',
		Brand,
		'b',
		'phb.id_brand = b.id_brand',
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
		'phcl',
		'prod.id_product = phcl.id_product',
	);
	query.leftJoinAndMapMany(
		'prod.productHasColors.color',
		Color,
		'c',
		'phcl.id_color = c.id_color',
	);
	query.leftJoinAndMapMany(
		'prod.productHasDetails',
		ProductHasDetails,
		'phd',
		'prod.id_product = phd.id_product',
	);
	query.leftJoinAndMapMany(
		'prod.productHasDetails.detail',
		Detail,
		'd',
		'phd.id_detail = d.id_detail',
	);
	const product = await query.getOne();

	return product;
}

export default RGetOneProductByInternalId;
