import { Color } from '@entities/color';
import { exoStaging } from '@storage/mysql/exoStaging';

const colorRepository = exoStaging.getRepository(Color);

export default colorRepository;
