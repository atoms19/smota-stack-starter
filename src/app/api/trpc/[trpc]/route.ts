import { NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { procedureRouter } from "@/procedures/router";
import { createProcedureContext } from "@/procedures";

const handler=(req:NextRequest)=>{
    return fetchRequestHandler({
        endpoint:'api/trpc',
        req,
        router:procedureRouter,
        createContext:()=>createProcedureContext({headers:req.headers})
    })
}

export { handler as GET, handler as POST };
