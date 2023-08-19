import CExchangeIndex from '@controllers/exchange';
import { Router } from 'express';

const exchangeRouter = Router();

exchangeRouter.get('/', CExchangeIndex);

export default exchangeRouter;
