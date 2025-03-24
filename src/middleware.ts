import { auth } from "@/auth";;
import { NextResponse } from "next/server";

export default auth(async (req) => {

   let publicPaths=[
      "/",
      "/signup",
      "/posts"
   ]

   if (!req.auth && !publicPaths.includes(req.nextUrl.pathname)){
      const newUrl = new URL("/signup", req.nextUrl.origin);
      return NextResponse.redirect(newUrl);
   } else {
      //logic to verify session
      //redirect accordingly
   }
});

export const config = {
   matcher: [ "/((?!api|_next/static|_next/image|favicon.ico|[^/]+\\.[a-zA-Z0-9]+).*)"]
};
