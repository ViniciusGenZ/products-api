import { Exchange } from '@entities/exchange';
import exoStaging from '@storage/mysql/exoStaging';

const RExchanges = exoStaging.getRepository(Exchange);

export default RExchanges;
