import express from "express";
const app = express();
const port = 4000;
import mongoose from "mongoose";
import route from "./routes/studentroutes.js";
import facilitatroute from "./routes/facilitatorRoutes.js"

app.use(express.json())
app.use(route)
app.use(facilitatroute);

mongoose.connect("mongodb://localhost:27017/studentManagementSystem")
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})