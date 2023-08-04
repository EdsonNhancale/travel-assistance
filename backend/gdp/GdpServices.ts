import axios from 'axios';


export class GdpServices {
    public async getGdp(countryCode: string) {
        return await axios.get(`https://api.worldbank.org/v2/country/${countryCode}/indicator/NY.GDP.MKTP.CD?format=json`)
    }
}