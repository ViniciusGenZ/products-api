import { Brand } from '@entities/brand';
import exoStaging from '@storage/mysql/exoStaging';

const RBrands = exoStaging.getRepository(Brand);

export default RBrands;
