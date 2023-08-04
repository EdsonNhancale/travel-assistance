import axios from "axios"

const baseUrl = "http://localhost:8000"

export function requests() {
    return {
        getWeather: (city_name: string) => (axios.get(`${baseUrl}/weather/${city_name}`)),
        getExchange: (currency: string) => axios.get(`${baseUrl}/currency/${currency}`),
        getCountryByName: (country_name: string) => axios.get(`${baseUrl}/country/find-currency-by-name/${country_name}`),
        findCountryName: (query: string) => axios.get(`${baseUrl}/country/find/${query}`),
        getPopulation: (country_name: string) => axios.get(`${baseUrl}/population/${country_name}`),
        getGdp: (country_name: string) => axios.get(`${baseUrl}/gdp/${country_name}`),
    }
}