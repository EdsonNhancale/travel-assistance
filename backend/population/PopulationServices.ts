
import axios from 'axios';


export class PopulationServices {
    public async getPopulation(countryCode: string) {
        return await axios.get(`https://api.worldbank.org/v2/country/${countryCode}/indicator/SP.POP.TOTL?format=json`)
    }
}