import { Category } from '@entities/category';
import { exoStaging } from '@storage/mysql/exoStaging';

const categoryRepository = exoStaging.getRepository(Category);

export default categoryRepository;
