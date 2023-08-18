import RGetAllBrands from '@repositories/brands/RGetAllBrands';

interface IProps {
	name?: string;
}

async function SGetAllBrands(input: IProps) {
	return RGetAllBrands(input);
}

export default SGetAllBrands;
