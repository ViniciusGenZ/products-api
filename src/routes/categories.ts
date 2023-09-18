import { Router } from 'express';
import VCategoriesIndex from '@validations/categories/VCategoriesIndex';
import CCategoriesIndex from '@controllers/categories';
import VCategoriesWIthProduts from '@validations/categories/VCategoriesWIthProduts';
import CCategoriesWithProducts from '@controllers/categories/withCategories';

const categoriesRouter = Router();

categoriesRouter.get('/', VCategoriesIndex, CCategoriesIndex);
categoriesRouter.get(
	'/products',
	VCategoriesWIthProduts,
	CCategoriesWithProducts,
);

export default categoriesRouter;
