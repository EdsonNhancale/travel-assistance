
import express from 'express';
import { GdpServices } from './GdpServices';
const router = express.Router();
const gdpServices = new GdpServices();

router.get('/:countryCode', async (req, res, next) => {
    try {
        const gdp = await gdpServices.getGdp(req.params.countryCode);
        res.send(gdp.data);
    } catch (error) {
        next(error);
    }
});

export { router };