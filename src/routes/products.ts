import CProductsIndex from '@controllers/products';
import CProductShow from '@controllers/products/show';
import VProductsIndex from '@validations/products/VProductsIndex';
import VProductShow from '@validations/products/VProductShow';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', VProductsIndex, CProductsIndex);
productsRouter.get('/:internal_id', VProductShow, CProductShow);

export default productsRouter;
