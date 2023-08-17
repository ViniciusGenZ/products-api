import productsIndexController from '@controllers/products';
import productsShowController from '@controllers/products/show';
import { productsIndexValidation } from '@validations/products';
import { productsShowValidation } from '@validations/products/show';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', productsIndexValidation, productsIndexController);
productsRouter.get('/:id', productsShowValidation, productsShowController);

export default productsRouter;
