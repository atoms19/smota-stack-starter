//sample scheema declaration , uncomment and run: "npx drizzle-kit generate" in terminal
 

/*import { varchar } from 'drizzle-orm/pg-core';
import {  pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';


export const usersTable= pgTable('users_table', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    phone:varchar('phone',{length:10}).notNull(),
    email:text('email').notNull(),
    createdOn:timestamp('created_on').defaultNow().notNull(),
})
  
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
*/