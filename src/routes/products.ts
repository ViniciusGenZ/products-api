import CProductsIndex from '@controllers/products';
import CProductShow from '@controllers/products/show';
import VProductsIndex from '@validations/products/VProductsIndex';
import VProductShow from '@validations/products/VProductShow';
import { Router } from 'express';
import jwtMiddleware from '@middlewares/jwt';
import userContextMiddleware from '@middlewares/userContext';

const productsRouter = Router();

productsRouter.use(jwtMiddleware);
productsRouter.use(userContextMiddleware);
productsRouter.get('/', VProductsIndex, CProductsIndex);
productsRouter.get('/:internal_id', VProductShow, CProductShow);

export default productsRouter;
