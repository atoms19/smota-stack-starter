import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
 // adapter:DrizzleAdapter(db) ucomment to use drizzle kit integration with next auth   
})