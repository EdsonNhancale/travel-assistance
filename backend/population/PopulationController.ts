
import express from "express";
import { PopulationServices } from "./PopulationServices";
const router = express.Router();
const findCountryServices = new PopulationServices();

router.get('/:countryCode', async (req, res, next) => {
    try {
        const population = await findCountryServices.getPopulation(req.params.countryCode);
        res.send(population.data);
    } catch (error) {
        next(error);
    }
});

export { router };