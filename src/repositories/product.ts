import { Product } from '@entities/product';
import { exoStaging } from '@storage/mysql/exoStaging';

const productRepository = exoStaging.getRepository(Product);

export default productRepository;
