import express from "express";
import clientsRouter from "./routes/client.route.js";
import suppliersRouter from "./routes/supplier.route.js";
import productsRouter from "./routes/product.route.js";
import salesRouter from "./routes/sale.route.js";

const app = express();

app.use("/client", clientsRouter);
app.use("/sale", salesRouter);
app.use("/supplier", suppliersRouter);
app.use("/product", productsRouter);

app.listen(3000, () => console.log("API Started"));