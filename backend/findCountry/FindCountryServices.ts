import axios from 'axios';
import countryList from 'country-list';
import { getAllInfoByISO } from 'iso-country-currency';

export class FindCountryServices {
    public getCountryCode(country: string) {
        return countryList.getCode(country) ?? ""
    }

    public getCountryCurrency(countryCode: string) {
        return getAllInfoByISO(countryCode)
    }

    public getCountryCurrencyByCountryName(country: string) {
        const countryCode = this.getCountryCode(country)
        return getAllInfoByISO(countryCode)
    }

    public async getCountryName(countryQuery: string) {
        return await axios.get(`https://data.worldbank.org/token-search?q=${countryQuery}&exclude=&locale=en&maxComposites=100`)
    }

}