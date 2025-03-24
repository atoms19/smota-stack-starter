// import all your other routers from routes directory here 

import { baseProcedure, defineProcedures } from "@/procedures";
import { createCaller } from "@/procedures";
import { postRouter } from "./routes/posts";

export const procedureRouter=defineProcedures({
    //mount <path> :<Router>
    "message":baseProcedure.query(
        ()=> {
         let atomstalk=["atoms's favourite color is purple/lavander",
            "atoms thanks his fam for love and suppourt",
            "atoms thanks his friends who calls him ocassionally ",
            "atoms likes to travel alone but he lazy",
            "its never too late , atoms is still single"
            ,"atoms can throw a solid punch despite his size",
            
         ]
         
         return atomstalk[Math.floor(Math.random()*atomstalk.length)]
    
        }),
    "posts":postRouter
    // <path> : <procedure>
})

export type ProcedureRouter=typeof procedureRouter;
export const caller=createCaller(procedureRouter);