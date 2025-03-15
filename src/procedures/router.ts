// import all your other routers from routes directory here 

import { baseProcedure, defineProcedures } from "@/procedures";
import { createCaller } from "@/procedures";
import { postRouter } from "./routes/posts";

export const procedureRouter=defineProcedures({
    //mount <path> :<Router>
    "message":baseProcedure.query(
        ()=> "hello"
    ),
    "posts":postRouter
    // <path> : <procedure>
})
export type ProcedureRouter=typeof procedureRouter;
export const caller=createCaller(procedureRouter);