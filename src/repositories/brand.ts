import { Brand } from '@entities/brand';
import { exoStaging } from '@storage/mysql/exoStaging'; 

const brandRepository = exoStaging.getRepository(Brand);

export default brandRepository;
