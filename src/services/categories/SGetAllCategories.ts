import RGetAllCategories from '@repositories/categories/RGetAllCategories';

interface IProps {
	name?: string;
}

async function SGetAllCategories(input: IProps) {
	return RGetAllCategories(input);
}

export default SGetAllCategories;
