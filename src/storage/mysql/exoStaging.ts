import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Brand } from '@entities/brand';
import { Category } from '@entities/category';
import { CategoryHasBrands } from '@entities/categoryHasBrands';
import { Color } from '@entities/color';
import { Material } from '@entities/material';
import { Product } from '@entities/product';
import { ProductDetail } from '@entities/productDetail';
import { ProductHasBrands } from '@entities/productHasBrands';
import { ProductHasCategories } from '@entities/productHasCategories';
import { ProductHasColors } from '@entities/productHasColors';
import { ProductHasImages } from '@entities/productHasImages';
import { ProductHasMaterials } from '@entities/productHasMaterials';
import { ProductImage } from '@entities/productImage';

export const exoStaging = new DataSource({
	type: 'mysql',
	host: process.env.MYSQL_DATABASE_HOST,
	port: Number(process.env.MYSQL_DATABASE_PORT ?? 3306),
	username: process.env.MYSQL_DATABASE_USER,
	database: process.env.MYSQL_DATABASE_DB,
	password: process.env.MYSQL_DATABASE_PASSWORD,
	synchronize: false,
	logging: false,
	entities: [
		Brand,
		Category,
		CategoryHasBrands,
		Color,
		Material,
		Product,
		ProductDetail,
		ProductHasBrands,
		ProductHasCategories,
		ProductHasColors,
		ProductHasImages,
		ProductHasMaterials,
		ProductImage,
	],
	migrations: [],
	subscribers: [],
});
