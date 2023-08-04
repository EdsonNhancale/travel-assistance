import axios from 'axios';

const ACCES_kEY = "1c8e2367bacd1266a128553668b57bb4"
export class ExchangeServices {
    public async getExchangeRates(currency: string) {
        return await axios.get(`http://api.exchangeratesapi.io/v1/latest?symbols=${currency}&access_key=${ACCES_kEY}`);
    }
}