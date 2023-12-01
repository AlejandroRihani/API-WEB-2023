import express from "express";
import UserRoutes from "./routes/user.routes"
const app = express();

app.use('/my-app',UserRoutes);

app.listen(3030,()=>{
    console.log("App executed in port 3030 ");
}); 