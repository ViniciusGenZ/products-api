import { ProductHasColors } from '@entities/productHasColors';
import { exoStaging } from '@storage/mysql/exoStaging';

const productHasColorsRepository = exoStaging.getRepository(ProductHasColors);

export default productHasColorsRepository;
