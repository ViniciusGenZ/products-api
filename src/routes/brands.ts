import CBrandsIndex from '@controllers/brands';
import CBrandsWithProducts from '@controllers/brands/withProducts';
import VBrandsIndex from '@validations/brands/VBrandsIndex';
import VBrandsWIthProduts from '@validations/brands/VBrandsWIthProduts';
import { Router } from 'express';

const brandsRouter = Router();

brandsRouter.get('/', VBrandsIndex, CBrandsIndex);
brandsRouter.get('/products', VBrandsWIthProduts, CBrandsWithProducts);

export default brandsRouter;
