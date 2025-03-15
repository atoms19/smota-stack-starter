"use client"
import { QueryClient, QueryClientProvider,defaultShouldDehydrateQuery, } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink, loggerLink, unstable_httpBatchStreamLink} from '@trpc/client';
import { useState } from 'react';
import { ProcedureProvider, useProcedures } from '@/lib/remote';
import SuperJSON from "superjson";
import { ProcedureRouter } from '@/procedures/router';
import { getBaseUrl } from './utils';


export const createQueryClient = () =>
   new QueryClient({
      defaultOptions: {
         queries: {
            staleTime: 30 * 1000
         },
         dehydrate: {
            serializeData: SuperJSON.serialize,
            shouldDehydrateQuery: (query) =>
               defaultShouldDehydrateQuery(query) ||
               query.state.status === "pending"
         },
         hydrate: {
            deserializeData: SuperJSON.deserialize
         }
      }
});


let browserQueryClient: QueryClient | undefined = undefined;
function getQueryClient() {
  if (typeof window === 'undefined') {
    return createQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = createQueryClient();
    return browserQueryClient;
  }
}


export function ClientProcedureProvider(props: { children: React.ReactNode }) {
    const queryClient = getQueryClient();
    const [trpcClient] = useState(() =>
createTRPCClient<ProcedureRouter>({
            links: [
              loggerLink({
                enabled: (op) =>
                  process.env.NODE_ENV === "development" ||
                  (op.direction === "down" && op.result instanceof Error),
              }),
              unstable_httpBatchStreamLink({
                transformer: SuperJSON,
                url: getBaseUrl() + "/api/trpc",
                headers: () => {
                  const headers = new Headers();
                  headers.set("x-trpc-source", "nextjs-react");
                  return headers;
                },
              }),
            ],
          })
    );
    return (
      <QueryClientProvider client={queryClient}>
        <ProcedureProvider trpcClient={trpcClient} queryClient={queryClient}>
         {props.children}
        </ProcedureProvider>
      </QueryClientProvider>
    );
  }