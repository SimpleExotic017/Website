import { Router } from "express";


export async function licenseRouter(language:string) {

    const router = Router();

    router.get("/",async(req,res)=>{
        res.render("license.ejs",{
            page:"license",
            lang:language.toLowerCase()
        })
    })
        
    return router
}
