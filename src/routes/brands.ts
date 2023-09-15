import CBrandsIndex from '@controllers/brands';
import CBrandsWithProducts from '@controllers/brands/withProducts';
import VBrandsIndex from '@validations/brands/VBrandsIndex';
import { Router } from 'express';

const brandsRouter = Router();

brandsRouter.get('/', VBrandsIndex, CBrandsIndex);
brandsRouter.get('/products', CBrandsWithProducts);

export default brandsRouter;
