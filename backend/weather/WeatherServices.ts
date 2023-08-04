import axios from 'axios';
const API_KEY = '1517094cdd3e4dd0250ac3ef906b019e';

export class WeatherServices {
    public async getWeatherForecast(city_name: string) {
        return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`);
    }
}