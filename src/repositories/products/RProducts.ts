import { Product } from '@entities/product';
import exoStaging from '@storage/mysql/exoStaging';

const RProducts = exoStaging.getRepository(Product);

export default RProducts;
