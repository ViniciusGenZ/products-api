import { Router } from 'express';
import VCategoriesIndex from '@validations/categories/VCategoriesIndex';
import CCategoriesIndex from '@controllers/categories';

const categoriesRouter = Router();

categoriesRouter.get('/', VCategoriesIndex, CCategoriesIndex);

export default categoriesRouter;
