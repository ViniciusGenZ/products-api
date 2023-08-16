import { ProductHasBrands } from '@entities/productHasBrands';
import { exoStaging } from '@storage/mysql/exoStaging';

const productsHasBrandsRepository = exoStaging.getRepository(ProductHasBrands);

export default productsHasBrandsRepository;
