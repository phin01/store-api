import express from "express";
import cors from "cors";
import winston from "winston";
import clientsRouter from "./routes/client.route.js";
import suppliersRouter from "./routes/supplier.route.js";
import productsRouter from "./routes/product.route.js";
import salesRouter from "./routes/sale.route.js";

const app = express();

app.use(express.json());
app.use(cors());
const {combine, timestamp, label, printf} = winston.format;
const myFormat = printf(({level, message, label, timestamp}) => `${timestamp} [${label}] ${level} ${message}`);


global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: "store-api.log"}),
    ],
    format: combine(
        label({ label: "store-api"}),
        timestamp(),
        myFormat
    )

});

app.use("/client", clientsRouter);
app.use("/sale", salesRouter);
app.use("/supplier", suppliersRouter);
app.use("/product", productsRouter);

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({error : err.message});
});
app.listen(3000, () => console.log("API Started"));