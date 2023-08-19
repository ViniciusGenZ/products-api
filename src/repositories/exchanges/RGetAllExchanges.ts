import RExchanges from './RExchanges';
import { MoreThan } from 'typeorm';

async function RGetAllExchanges() {
	return RExchanges.find({
		where: {
			amount_buy: MoreThan(0),
		},
		relations: {
			currency: true,
		},
	});
}
export default RGetAllExchanges;
