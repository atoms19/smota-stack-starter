import { initTRPC,TRPCError } from "@trpc/server";
import { auth } from "@/auth";
import { db } from "@/db"
import superjson from "superjson";
import { ZodError } from "zod";


export const createProcedureContext=async (options:{headers:Headers})=>{
    const session =await auth()

    return {
        db,session,...options
    }

}


const t = initTRPC.context<typeof createProcedureContext>().create({
    transformer:superjson,
    errorFormatter({ shape, error }) {
        return {
          ...shape,
          data: {
            ...shape.data,
            validationError:
              error.cause instanceof ZodError ? error.cause.flatten() : null,
          },
        };
      },
});


export const defineProcedures = t.router;
export const createCaller=t.createCallerFactory
export const baseProcedure=t.procedure;


export const secureProcedure=t.procedure.use(({ctx,next})=>{
    if(!ctx.session || !ctx.session.user){
                throw new TRPCError({code:"UNAUTHORIZED"});
    }
    return next({
      ctx:{
        session:{...ctx.session,
                user:ctx.session.user
            }
      }  
    })
})

