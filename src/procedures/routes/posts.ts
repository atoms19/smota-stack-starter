import { z } from "zod";
import { baseProcedure, defineProcedures } from "..";

let latest={
    name:'wow i love smota-stack',
    createdAt:'10-2-2025'
  }

export const postRouter=defineProcedures({
    getLatest:baseProcedure.query( async ({ctx})=>{
          return latest
    })
    ,
    create:baseProcedure.input(z.object({
        name:z.string().min(1)
    })).mutation(async({ctx,input})=>{
        latest={
            name:input.name,
            createdAt:new Date().toISOString()
        }
    })
})