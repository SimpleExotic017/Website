import { Router } from "express";

export async function aboutmeRouter(language:string) {
    const router = Router();
    router.get("/", (req, res) => {
        res.render("aboutme", {
            page:"aboutme",
            lang:language.toLowerCase()
    })})

    return router;
}