import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

import { Category } from '@entities/exo/category';
import { Brand } from '@entities/exo/brand';
import { ProductImage } from '@entities/exo/productImage';
import { ProductHasImages } from '@entities/exo/productHasImages';
import { Product } from '@entities/exo/product';
import { CategoryHasBrands } from '@entities/exo/categoryHasBrands';
import { ProductHasBrands } from '@entities/exo/productHasBrands';
import { ProductHasCategories } from '@entities/exo/productHasCategories';
import { Color } from '@entities/exo/color';
import { Material } from '@entities/exo/material';
import { ProductDetail } from '@entities/exo/productDetail';
import { ProductHasMaterials } from '@entities/exo/productHasMaterials';
import { ProductHasColors } from '@entities/exo/productHasColors';

export const exoStaging = new DataSource({
	type: 'mysql',
	host: process.env.MYSQL_DATABASE_HOST,
	port: Number(process.env.MYSQL_DATABASE_PORT ?? 3306),
	username: process.env.MYSQL_DATABASE_USER,
	database: process.env.MYSQL_DATABASE_DB,
	password: process.env.MYSQL_DATABASE_PASSWORD,
	synchronize: true,
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
