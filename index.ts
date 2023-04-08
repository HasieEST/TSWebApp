import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import stringsController from "./controllers/strings";
import productsController from "./controllers/products";
import productsListController from "./controllers/productlist";
import parcelController from "./controllers/parcelmachines"
import elringController from "./controllers/elring"
import makseController from "./controllers/makse"
const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3006']
}));
app.use(bodyParser.json());
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productsListController);
app.use('/', parcelController)
app.use('/', elringController)
app.use('/', makseController)

app.listen(3000, () => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});