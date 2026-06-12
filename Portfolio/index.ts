import express, { Express } from "express";
import {indexRouter} from "./routers/indexRouter";
import { projectsRouter } from "./routers/projectsRouter";
// import { seedDatabase } from "./Database";

import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "routers")));
app.set('views', path.join(__dirname, "views"));

app.set("port", process.env.PORT || 3000);

async function startServer() {
    // await seedDatabase();
    app.use("/projects",await projectsRouter());
    app.use("/", await indexRouter());

    app.use((req, res, next) => {
        res.status(404).render('WIP',{page:"WIP"}); 
    });
}

startServer();

app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get('port'));
});