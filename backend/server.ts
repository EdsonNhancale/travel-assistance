// Load HTTP module
import express from "express";
// import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { router as WeatherController } from './weather/WeatherController';
import { router as ExchangeController } from './exchange/ExchangeController';
import { router as FindCountryController } from './findCountry/FindCountryController';
import { router as PopulationController } from './population/PopulationController';
import { router as GdpController } from './gdp/GdpController';
const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use(function (err: { status: any; }, req: any, res: { status: (arg0: any) => void; send: (arg0: any) => void; }, next: any) {
  res.status(err.status || 500);
  res.send(err);
});

app.use("/weather", WeatherController);

app.use("/currency", ExchangeController);

app.use("/country", FindCountryController);

app.use("/population", PopulationController);

app.use("/gdp", GdpController);

//Port running
app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/`);
});