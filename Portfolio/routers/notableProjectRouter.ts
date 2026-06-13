import { Router } from "express";
import { project } from "../types/projects";
import { getProjectByName } from "../Database";

export async function notableProjectsRouter(language: string) {
    const router = Router();

    router.get("/:projectname", async (req, res) => {
        const projectname = req.params.projectname;
        let project: project | undefined = undefined;
        try {
            project = await getProjectByName(projectname);
        } catch (error) {
            console.log(error);
        }
        res.render(language.toUpperCase()+ "/notableProject", {
            project,
            page: "notable-project/" + projectname
        });
    });

    return router;
}