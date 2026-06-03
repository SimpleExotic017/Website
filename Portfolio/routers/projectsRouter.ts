import { Router } from "express";
import { project } from "../types/projects";
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
        let projects: project[] = [
            {
                id:1,
                name:"namelessGame",
                category:"Game Engine",
                languages:["Java","JavaFX"],
                description:["My first attempts at a game engine"],
                gitURL:"https://github.com/SimpleExotic017/namelessGame",
                detailImageCount:1
            },
            {
                id:2,
                name:"namelessGameEditor",
                category:"Game Engine",
                languages:["Java","JavaFX"],
                description:["This was created to easily edit and create levels"],
                gitURL:"https://github.com/SimpleExotic017/namelessGameLevelEditor",
                detailImageCount:1
            },
            {
                id:3,
                name:"Saving",
                category:"Personal Finance",
                languages:["Java","JavaFX"],
                description:["A budgetting application to keep track of expenses"],
                gitURL:"https://github.com/SimpleExotic017/Saving",
                detailImageCount:1
            },
            {
                id:4,
                name:"Bejeweled",
                category:"Game",
                languages:["Java","JavaFX"],
                description:["A succesful attempt at recreating the game Candy Crush"],
                gitURL:"N/A",
                detailImageCount:1
            },
            {
                id:5,
                name:"MyFirstStore",
                category:"WebShop back-end",
                languages:["C#"],
                description:["A C# back-end for an online webshop"],
                gitURL:"https://github.com/SimpleExotic017/MyFirstStore",
                detailImageCount:1
            },
            {
                id:6,
                name:"ThisIsHome",
                category:"psychological horror game",
                languages:["Java","JavaFX"],
                description:["A visual novel style game I spent a lot of time on the storyline"],
                gitURL:"https://github.com/SimpleExotic017/ThisIsHome",
                detailImageCount:1
            },
            {
                id:7,
                name:"CQBTactical",
                category:"WebShop",
                languages:["HTML","CSS","JavaScript"],
                description:["My first website/webshop mocking the sale of airsoft equipment"],
                gitURL:"https://github.com/SimpleExotic017/https---github.com-SimpleExotic017-webTech",
                detailImageCount:1
            },
            {
                id:8,
                name:"AdventOfCode2025",
                category:"Algorithm Puzzle",
                languages:["C#"],
                description:["A fun cognitive challenge"],
                gitURL:"https://github.com/SimpleExotic017/AdventOfCode",
                detailImageCount:1
            },
            {
                id:9,
                name:"ChocolatesWebsite",
                category:"Website",
                languages:["EJS","TypeScript","CSS"],
                description:["A website displaying choclates and their different characteristics"],
                gitURL:"https://github.com/AP-G-1PRO-Webontwikkeling/project-webontwikkeling-2025-SimpleExotic017",
                detailImageCount:1
            },
            {
                id:10,
                name:"BadApple",
                category:"ASCII-Animation",
                languages:["C#"],
                description:["A console App displaying Bad Apple with a real time FPS counter"],
                gitURL:"https://github.com/SimpleExotic017/BadApple",
                detailImageCount:1
            },
            {
                id:11,
                name:"HiCore",
                category:"Library",
                languages:["C#"],
                description:["A C# library created to improve Quality Of Life during my student time at Artesis Plantijn"],
                gitURL:"https://github.com/SimpleExotic017/HiCore",
                detailImageCount:1
            },
            {
                id:12,
                name:"ProjectOOP",
                category:"Library Back-end",
                languages:["C#"],
                description:["A C# back-end for a library"],
                gitURL:"https://github.com/SimpleExotic017/Project_OOP",
                detailImageCount:1
            },
            {
                id:13,
                name:"GameHub",
                category:"Website",
                languages:["EJS","TypeScript","CSS"],
                description:["A website displaying games which you can add to a collection, guess in the guessing game or compare with each other and much more"],
                gitURL:"https://github.com/TiboVanDaele/B-Hive_V2",
                detailImageCount:1
            },
            {
                id:14,
                name:"PortfolioWebsite",
                category:"Website",
                languages:["EJS","TypeScript","CSS"],
                description:["This website :D"],
                gitURL:"https://github.com/SimpleExotic017/Portfolio",
                detailImageCount:1
            }
        ]
        res.render("projects",{
            featureQuotes,
            featureStatements,
            projects
        })
    })

    return router
}
