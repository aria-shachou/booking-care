import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

viewEngine(app);
initWebRoutes(app);

connectDB();

const PORT = process.env.PORT || 3069;
app.listen(PORT, (req, res) => {
  console.log("App is listening on port: ", PORT);
});
