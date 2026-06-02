import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import {indexRouter} from "./routers/indexRouter";
import { WIPRouter } from "./routers/WIPRouter";

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
    app.use("/WIP", await WIPRouter())
    app.use("/", await indexRouter());

    app.use((req, res, next) => {
        res.status(404).render('wip'); 
    });
}

startServer();

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get('port'));
});