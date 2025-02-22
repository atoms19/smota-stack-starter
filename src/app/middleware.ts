import { auth } from "@/auth";
//import { getSessionDoctor } from "./lib/utils";

export default auth(async (req) => {
  console.log("redired")
   if (!req.auth && req.nextUrl.pathname !== "/login") {
      const newUrl = new URL("/login", req.nextUrl.origin);
      return Response.redirect(newUrl);
   }else{
      //logic to verify session
      //redirect accordingly
   }
});

export const config = {
   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
