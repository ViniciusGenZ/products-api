import { ProductHasImages } from '@entities/productHasImages';
import exoStaging from '@storage/mysql/exoStaging';

const productHasImagesRepository = exoStaging.getRepository(ProductHasImages);

export default productHasImagesRepository;
