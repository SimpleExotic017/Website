import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import {indexRouter} from "./routers/indexRouter";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "routers")));
app.set('views', path.join(__dirname, "views"));

app.set("port", process.env.PORT || 3000);

async function startServer() {
    await app.use("/", await indexRouter());
}

startServer();

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get('port'));
});