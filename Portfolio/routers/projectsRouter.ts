import { Router } from "express";
import { project } from "../types/projects";
import { getLast12Projects, getProjectByName } from "../Database";

export async function projectsRouter(language: string) {
    const router = Router();

    const content = {
        nl: {
            featureStatements: [
                "Goede code, strak design.",
                "Code is tijdelijk, nut blijft.",
                "Minder chaos, meer impact.",
                "Pixel perfect, slim gebouwd.",
                "Eenvoud is pure klasse.",
                "Voor de mens, door code.",
                "Denk groot, bouw slim.",
                "Design lost op, code voert uit.",
                "Snelle laadtijd, fijne flow.",
                "Van idee naar live code.",
                "De details maken de app.",
                "Schoon van binnen, mooi van buiten.",
                "Innovatie begint bij de basis.",
                "Maak het simpel maar goed.",
                "Data stuurt ons design.",
                "Perfect op elk scherm.",
                "Waar vorm en logica mixen.",
                "De gebruiker staat op één.",
                "Code gebouwd voor de toekomst.",
                "Vorm en functie in balans."
            ],
            featureQuotes: [
                "Schone code. Strakke UI. Top resultaat.",
                "Design is hoe een product werkt.",
                "Gefocust op een slimme interactie.",
                "De juiste balans in tech en kunst.",
                "Een goede UI merk je amper op.",
                "Toegang voor iedereen is een eis.",
                "Gek op snelheid, SEO en schone code.",
                "Meten is weten, testen is groeien.",
                "Elke regel code heeft een doel.",
                "Sites die mooi zijn én converteren.",
                "Eerst het probleem snappen, dan bouwen.",
                "Slimme tech voor de dag van morgen.",
                "Van schets tot live site in controle.",
                "Juist de details maken het product.",
                "Een strakke workflow werkt sneller.",
                "Fijne animaties die de flow helpen.",
                "Altijd op zoek naar de nieuwste tech.",
                "Goede code spreekt voor zichzelf.",
                "Simpel design met krachtige logica.",
                "Jouw idee vertaald naar code."
            ]
        },
        en: {
            featureStatements: [
                "Clean code, clean design.",
                "Code is temporary, utility remains.",
                "Less chaos, more impact.",
                "Pixel perfect, smartly built.",
                "Simplicity is pure class.",
                "For humans, driven by code.",
                "Think big, build smart.",
                "Design dissolves, code executes.",
                "Fast load times, smooth flow.",
                "From idea to live code.",
                "The details make the app.",
                "Clean on the inside, beautiful on the outside.",
                "Innovation starts at the foundation.",
                "Make it simple but significant.",
                "Data drives our design.",
                "Perfect on every screen.",
                "Where form and logic blend.",
                "The user always comes first.",
                "Code built for the future.",
                "Balance between form and function."
            ],
            featureQuotes: [
                "Clean code. Sleek UI. Top results.",
                "Design is how a product works.",
                "Focused on smart interaction.",
                "The perfect balance of tech and art.",
                "A good UI is barely noticeable.",
                "Accessibility for everyone is a requirement.",
                "Passionate about speed, SEO, and clean code.",
                "Measuring is knowing, testing is growing.",
                "Every line of code has a purpose.",
                "Sites that look great and convert.",
                "Understand the problem first, then build.",
                "Smart tech for tomorrow.",
                "In control from sketch to live site.",
                "It is precisely the details that make the product.",
                "A streamlined workflow works faster.",
                "Subtle animations that enhance the flow.",
                "Always hunting for the latest tech.",
                "Good code speaks for itself.",
                "Simple design backed by powerful logic.",
                "Your idea translated into code."
            ]
        }
    };

    router.get("/", async (req, res) => {
        const activeLang = (language === "nl" || language === "en") ? language : "en";
        
        const featureQuotes:string[] = content[activeLang].featureQuotes;
        const featureStatements:string[] = content[activeLang].featureStatements;
        const projectArray: project[] | undefined = await getLast12Projects();
        
        res.render(language + "/projects", {
            featureQuotes,
            featureStatements,
            projects: projectArray,
            page: "projects"
        });
    });

    router.get("/notable/:projectname", async (req, res) => {
        const projectname = req.params.projectname;
        let project: project | undefined = undefined;
        try {
            project = await getProjectByName(projectname);
        } catch (error) {
            console.log(error);
        }
        res.render(language + "/notableProject", {
            project,
            page: "projects/notable/" + projectname
        });
    });

    router.get("/:projectname", async (req, res) => {
        const projectname = req.params.projectname;
        let project: project | undefined = undefined;
        try {
            project = await getProjectByName(projectname);
        } catch (error) {
            console.log(error);
        }
        res.render(language + "/projectDetails", {
            project,
            page: "projects/" + projectname
        });
    });

    return router;
}