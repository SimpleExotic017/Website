import { Router } from "express";
import { project } from "../types/projects";
import { get3NotableProjects } from "../Database";

export async function indexRouter() {
    const router = Router();
    const projects:project[] | undefined = await get3NotableProjects();
    router.get("/", (req, res) => {
        res.render("index", {
            projects,
            page:"home"
    })})

    return router;
}