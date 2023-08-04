import { WeatherServices } from "./WeatherServices";

import express from 'express';
const router = express.Router();
const weatherServices = new WeatherServices();

router.get('/:city_name', async (req, res, next) => {
    try {
        const weather = await weatherServices.getWeatherForecast(req.params.city_name);
        res.send(weather.data);
    } catch (error) {
        next(error);
    }
});

export { router };