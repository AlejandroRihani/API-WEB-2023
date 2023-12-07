import "reflect-metadata";

import express from "express";

import database from "./config/database";

import UserRoutes from "./routes/user.routes"

import ProductRoutes from "./routes/products.routes"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

database.initialize()
.then(() => console.log("Database Connected yea boi"))
.catch(console.error);

app.use('/my-app',UserRoutes);
app.use('/my-app',ProductRoutes);

app.listen(3030,()=>{
    console.log("App executed in port 3030 ");
}); 