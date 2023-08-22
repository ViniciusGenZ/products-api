import { ProductsView } from '@entities/productsView';
import exoStaging from '@storage/mysql/exoStaging';

const RProductsView = exoStaging.getRepository(ProductsView);

export default RProductsView;
