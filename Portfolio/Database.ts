import { MongoClient } from "mongodb";
import { project } from "./types/projects";

import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const mongo_uri = process.env.MONGODB_URI;

if (mongo_uri == undefined){
    process.exit(0);
}

const client = new MongoClient(mongo_uri);
const db = client.db("MVHWebsite");
const projectsCollection = db.collection<project>("projects")

export async function addToDatabase(project: project) {
    try{
        await client.connect();
        const highestIdProject = await projectsCollection.findOne({}, { sort: { id: -1 } });
        let projectIdUpdated = project;
        if (highestIdProject) {
            projectIdUpdated.id = highestIdProject.id + 1;
        } else {
            projectIdUpdated.id = 1;
        }
await projectsCollection.insertOne(projectIdUpdated);
    }catch(error){
        console.log("something went wrong adding a project to the database : " + error)
    }finally{
        await client.close();
    }
}

export async function getProjectByName(projectname:string) {
    try{
        await client.connect();
        const project:project | null = await projectsCollection.findOne({name:projectname})
        if(project == null){
            throw "404 project not found";
        }
        return project;
    }catch(error){
        console.log("something went wrong retrieving a project from the database : " + error)
    }finally{
        await client.close();
    }
}

// export async function seedDatabase() {
//     try{
//         await client.connect();
//         if(await projectsCollection.countDocuments() <= 0){
//             await projectsCollection.insertMany(projects)
//             console.log("database seeded")
//         }
//     }catch(error){
//         console.log("something went wrong adding a project to the database : " + error)
//     }finally{
//         await client.close();
//     }
// }

export async function getLast12Projects() {
    try{
        await client.connect();
        const projectsArray: project[] = await projectsCollection.find().sort({id:-1}).limit(12).toArray();
        return projectsArray.reverse();
    }catch(error){
        console.log("something went wrong adding a project to the database : " + error)
    }finally{
        await client.close();
    }
}

export async function get3NotableProjects() {
    try{
        await client.connect();
        const projectsArray: project[] = await projectsCollection.find({notable:true}).sort({id:-1}).limit(3).toArray();
        return projectsArray.reverse();
    }catch(error){
        console.log("something went wrong adding a project to the database : " + error)
    }finally{
        await client.close();
    }
}


// let projects: project[] = [
//     {
//         id:1,
//         name:"namelessGame",
//         category:"Game Engine",
//         languages:["Java","JavaFX"],
//         description:["My first attempts at a game engine"],
//         gitURL:"https://github.com/SimpleExotic017/namelessGame",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:2,
//         name:"namelessGameEditor",
//         category:"Game Engine",
//         languages:["Java","JavaFX"],
//         description:["This was created to easily edit and create levels"],
//         gitURL:"https://github.com/SimpleExotic017/namelessGameLevelEditor",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:3,
//         name:"Saving",
//         category:"Personal Finance",
//         languages:["Java","JavaFX"],
//         description:["A budgetting application to keep track of expenses"],
//         gitURL:"https://github.com/SimpleExotic017/Saving",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:4,
//         name:"Bejeweled",
//         category:"Game",
//         languages:["Java","JavaFX"],
//         description:["A succesful attempt at recreating the game Candy Crush"],
//         gitURL:"N/A",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:5,
//         name:"MyFirstStore",
//         category:"WebShop back-end",
//         languages:["C#"],
//         description:["A C# back-end for an online webshop"],
//         gitURL:"https://github.com/SimpleExotic017/MyFirstStore",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:6,
//         name:"ThisIsHome",
//         category:"psychological horror game",
//         languages:["Java","JavaFX"],
//         description:["A visual novel style game I spent a lot of time on the storyline"],
//         gitURL:"https://github.com/SimpleExotic017/ThisIsHome",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:7,
//         name:"CQBTactical",
//         category:"WebShop",
//         languages:["HTML","CSS","JavaScript"],
//         description:["My first website/webshop mocking the sale of airsoft equipment"],
//         gitURL:"https://github.com/SimpleExotic017/https---github.com-SimpleExotic017-webTech",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:8,
//         name:"AdventOfCode2025",
//         category:"Algorithm Puzzle",
//         languages:["C#"],
//         description:["A fun cognitive challenge"],
//         gitURL:"https://github.com/SimpleExotic017/AdventOfCode",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:9,
//         name:"ChocolatesWebsite",
//         category:"Website",
//         languages:["EJS","TypeScript","CSS"],
//         description:["A website displaying choclates and their different characteristics"],
//         gitURL:"https://github.com/AP-G-1PRO-Webontwikkeling/project-webontwikkeling-2025-SimpleExotic017",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:10,
//         name:"BadApple",
//         category:"ASCII-Animation",
//         languages:["C#"],
//         description:["A console App displaying Bad Apple with a real time FPS counter"],
//         gitURL:"https://github.com/SimpleExotic017/BadApple",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:11,
//         name:"HiCore",
//         category:"Library",
//         languages:["C#"],
//         description:["A C# library created to improve Quality Of Life during my student time at Artesis Plantijn"],
//         gitURL:"https://github.com/SimpleExotic017/HiCore",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:12,
//         name:"ProjectOOP",
//         category:"Library Back-end",
//         languages:["C#"],
//         description:["A C# back-end for a library"],
//         gitURL:"https://github.com/SimpleExotic017/Project_OOP",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:13,
//         name:"GameHub",
//         category:"Website",
//         languages:["EJS","TypeScript","CSS"],
//         description:["A website displaying games which you can add to a collection, guess in the guessing game or compare with each other and much more"],
//         gitURL:"https://github.com/TiboVanDaele/B-Hive_V2",
//         detailImageCount:1,
//         notable:false
//     },
//     {
//         id:14,
//         name:"PortfolioWebsite",
//         category:"Website",
//         languages:["EJS","TypeScript","CSS"],
//         description:["This website :D"],
//         gitURL:"https://github.com/SimpleExotic017/Portfolio",
//         detailImageCount:1,
//         notable:false
//     }
// ]