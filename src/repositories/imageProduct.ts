import { ProductImage } from '@entities/productImage';
import exoStaging from '@storage/mysql/exoStaging';

const imageProductsRepository = exoStaging.getRepository(ProductImage);

export default imageProductsRepository;
