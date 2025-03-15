import "server-only"

import { createTRPCContext, createTRPCOptionsProxy, TRPCQueryOptions } from '@trpc/tanstack-react-query';
import { cache } from 'react';
import { createCaller, createProcedureContext } from "@/procedures";
import { createQueryClient } from "./remoteClient";
import { headers } from "next/headers";
import { procedureRouter } from "@/procedures/router";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const createContext=cache(async  ()=>{
    const heads = new Headers(await headers());
    heads.set("x-trpc-source", "rsc");
  
    return createProcedureContext({
      headers: heads,
    });
})

export const getQueryClient=cache(createQueryClient)
const caller=cache(createCaller)

export const procedures = createTRPCOptionsProxy({
  ctx: createContext,
  router: procedureRouter,
  queryClient: getQueryClient,
});

export const serverCall=procedureRouter.createCaller(createContext)


export function HydrateClient(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {props.children}
    </HydrationBoundary>
  );
}
export function prefetch<T extends ReturnType<TRPCQueryOptions<any>>>(
  queryOptions: T,
) {
  const queryClient = getQueryClient();
  if (queryOptions.queryKey[1]?.type === 'infinite') {
    void queryClient.prefetchInfiniteQuery(queryOptions as any);
  } else {
    void queryClient.prefetchQuery(queryOptions);
  }
}


