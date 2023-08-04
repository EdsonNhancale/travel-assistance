

import { ExchangeServices } from "./ExchangeServices";

import express from 'express';
const router = express.Router();
const exchangeServices = new ExchangeServices();

router.get('/:currency', async (req, res, next) => {
    try {
        const exchange = await exchangeServices.getExchangeRates(req.params.currency);
        res.send(exchange.data);
    } catch (error) {
        next(error);
    }
});

export { router };