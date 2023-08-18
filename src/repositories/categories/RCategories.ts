import { Category } from '@entities/category';
import exoStaging from '@storage/mysql/exoStaging';

const RCategories = exoStaging.getRepository(Category);

export default RCategories;
