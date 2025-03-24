import type { procedureRouter } from "@/procedures/router";
import { createTRPCContext } from "@trpc/tanstack-react-query";




const client = createTRPCContext<typeof procedureRouter>();
export const ProcedureProvider = client.TRPCProvider;
export const useProcedures = client.useTRPC;
export const useProcedureClient = client.useTRPCClient;

