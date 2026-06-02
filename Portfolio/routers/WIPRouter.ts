import { Router } from "express";
export async function WIPRouter() {
    const router = Router();

    router.get("/",(req,res)=>{
        res.render("WIP",{
        })
    })

    return router
}
