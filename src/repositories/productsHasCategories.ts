import { ProductHasCategories } from '@entities/productHasCategories';
import { exoStaging } from '@storage/mysql/exoStaging';

const productsHasCategoriesRepository =
	exoStaging.getRepository(ProductHasCategories);

export default productsHasCategoriesRepository;
