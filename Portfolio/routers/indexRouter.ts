import { Router } from "express";
import { project } from "../types/projects";

export async function indexRouter() {
    const router = Router();

    let projects: project[] = [
        {
            id:1,
            name:"HiCore",
            category:"Library",
            languages:["C#"],
            description:["A C# library created to improve Quality Of Life during my student time at Artesis Plantijn"],
            gitURL:"https://github.com/SimpleExotic017/HiCore",
            detailImageCount:1
        },
        {
            id:2,
            name:"BadApple Animation",
            category:"ASCII-Animation",
            languages:["C#"],
            description:["A console App displaying Bad Apple with a real time FPS counter"],
            gitURL:"https://github.com/SimpleExotic017/BadApple",
            detailImageCount:1
        },
        {
            id:3,
            name:"GameHub B-Hive",
            category:"Website",
            languages:["EJS","TypeScript","CSS"],
            description:["A website displaying games which you can add to a collection, guess in the guessing game or compare with each other and much more"],
            gitURL:"https://github.com/TiboVanDaele/B-Hive_V2",
            detailImageCount:1
        }
    ]

    router.get("/", (req, res) => {
        res.render("index", {
            projects:projects
    })})

    return router;
}