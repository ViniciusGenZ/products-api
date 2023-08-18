import CBrandsIndex from '@controllers/brands';
import VBrandsIndex from '@validations/brands/VBrandsIndex';
import { Router } from 'express';

const brandsRouter = Router();

brandsRouter.get('/', VBrandsIndex, CBrandsIndex);

export default brandsRouter;
