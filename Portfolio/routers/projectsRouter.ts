import { Router } from "express";
export async function projectsRouter() {

    const router = Router();

    router.get("/",(req,res)=>{
        const featureStatements = [
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
        ];

        const featureQuotes = [
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
        ];
        res.render("projects",{
            featureQuotes,
            featureStatements
        })
    })

    return router
}
