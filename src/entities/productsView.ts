import { DataSource, PrimaryColumn, ViewColumn, ViewEntity } from 'typeorm';
import { Product } from './product';
import { Brand } from './brand';
import { Category } from './category';
import { Color } from './color';
import { ProductHasBrands } from './productHasBrands';
import { ProductHasCategories } from './productHasCategories';
import { ProductHasColors } from './productHasColors';
import { ProductHasImages } from './productHasImages';
import { ProductImage } from './productImage';

@ViewEntity({
	materialized: true,
	expression: (ds: DataSource) =>
		ds
			.createQueryBuilder()
			.from(Product, 'prod')
			.leftJoinAndMapMany(
				'prod.productHasCategories',
				ProductHasCategories,
				'phc',
				'prod.id_product = phc.id_product',
			)
			.leftJoinAndMapMany(
				'prod.productHasCategories.category',
				Category,
				'cat',
				'phc.id_category = cat.id_category',
			)
			.leftJoinAndMapMany(
				'prod.productHasImages',
				ProductHasImages,
				'phi',
				'prod.id_product = phi.id_product',
			)
			.leftJoinAndMapMany(
				'prod.productHasImages.image',
				ProductImage,
				'ima',
				'phi.id_product_image = ima.id_product_image',
			)
			.leftJoinAndMapMany(
				'prod.productHasColors',
				ProductHasColors,
				'phc2',
				'prod.id_product = phc2.id_product',
			)
			.leftJoinAndMapMany(
				'prod.productHasColors.color',
				Color,
				'c',
				'phc2.id_color = c.id_color',
			)
			.leftJoinAndMapMany(
				'prod.productHasBrands',
				ProductHasBrands,
				'phb',
				'prod.id_product = phb.id_product',
			)
			.leftJoinAndMapMany(
				'prod.productHasBrands.brand',
				Brand,
				'b',
				'phb.id_brand = b.id_brand',
			),
})
export class ProductsView {
	@ViewColumn()
	@PrimaryColumn()
	id_product: number;

	@ViewColumn()
	name_py: string;
}
