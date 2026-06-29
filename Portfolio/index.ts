import express, { Express } from "express";
import { indexRouter } from "./routers/indexRouter";
import { projectsRouter } from "./routers/projectsRouter";
import { licenseRouter } from "./routers/licenseRouter";
import { notableProjectsRouter } from "./routers/notableProjectRouter";
// import { seedDatabase } from "./Database";

import path from 'path';
import dotenv from 'dotenv';

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
    // await seedDatabase();
    app.get("/", (req, res) => {
        res.redirect("/nl/");
    });

    //engels yippiieee
    app.use("/en/notable-project", await notableProjectsRouter("en"))
    app.use("/en/projects", await projectsRouter("en"));
    app.use("/en/license", await licenseRouter("en"))
    app.use("/en/", await indexRouter("en"));

    //nederlands
    app.use("/nl/notable-project", await notableProjectsRouter("nl"))
    app.use("/nl/projects", await projectsRouter("nl"));
    app.use("/nl/license", await licenseRouter("nl"))
    app.use("/nl/", await indexRouter("nl"));

    app.use((req, res, next) => {
        const lang = req.path.startsWith('/nl/') ? 'nl' : 'en';
        res.status(404).render('WIP', { page: "WIP", lang: lang.toLocaleLowerCase() }); 
    });
}

startServer();

app.listen(app.get("port"), () => {
    console.log(`Server started internally on port ${app.get('port')}`);
});