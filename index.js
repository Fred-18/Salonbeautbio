import express from "express";
import path from "path";
import connectDB from "./config/connectDB.js";
import homepageRouter from "./routes/homepageRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import dotenv from "dotenv"
import bodyParser from "body-parser";

// Configure dotenv
dotenv.config();

// Connect to the DB
connectDB();



const __dirname = path.resolve();

// Create express App
const app = express();
app.use(bodyParser.json());

// Set views engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

// Use routers
app.use(homepageRouter);
app.use(categoryRouter);


// Create server and Listenning
app.listen(8082, () => {
    console.log("Server is listenning at port 8082");
});
