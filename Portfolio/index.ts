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
    app.get("/", (req, res) => {
        res.redirect("/nl/");
    });

    //supported languages
    const languages = ["nl", "en"];

    for (const lang of languages) {
        app.use(`/${lang}/notable-project`, await notableProjectsRouter(lang));
        app.use(`/${lang}/projects`,        await projectsRouter(lang));
        app.use(`/${lang}/license`,         await licenseRouter(lang));
        app.use(`/${lang}/`,                await indexRouter(lang));
    }

    app.use((req, res, next) => {
        const lang = req.path.startsWith('/nl/') ? 'nl' : 'en';
        res.status(404).render('WIP', { page: "WIP", lang: lang.toLowerCase() }); 
    });
}

startServer();

app.listen(app.get("port"), () => {
    console.log(`Server started internally on port ${app.get('port')}`);
});