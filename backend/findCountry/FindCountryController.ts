import { FindCountryServices } from "./FindCountryServices";

import express from 'express';
const router = express.Router();
const findCountryServices = new FindCountryServices();

router.get('/find-currency-by-name/:country', (req, res, next) => {
    try {
        const country = findCountryServices.getCountryCurrencyByCountryName(req.params.country);
        res.send(country);
    } catch (error) {
        next(error);
    }
});

router.get('/find-currency-by-code/:countryCode', (req, res, next) => {
    try {
        const country = findCountryServices.getCountryCurrency(req.params.countryCode);
        res.send(country);
    } catch (error) {
        next(error);
    }
});

router.get('/find-country-code/:country', (req, res, next) => {
    try {
        const country = findCountryServices.getCountryCode(req.params.country);
        res.send(country);
    } catch (error) {
        next(error);
    }
});

router.get('/find/:query', async (req, res, next) => {
    try {
        const country = await findCountryServices.getCountryName(req.params.query);
        res.send(JSON.stringify(country.data));
    } catch (error) {
        next(error);
    }
});

export { router };