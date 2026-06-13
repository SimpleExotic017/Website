import { Router } from "express";


export async function licenseRouter(language:string) {

    const router = Router();

    router.get("/",async(req,res)=>{
        res.render(language+"/license.ejs",{
            page:"license"
        })
    })
        
    return router
}
