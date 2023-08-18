import { ProductHasCategories } from '@entities/productHasCategories';
import exoStaging from '@storage/mysql/exoStaging';

const RProductsHasCategories = exoStaging.getRepository(ProductHasCategories);

export default RProductsHasCategories;
