import { drizzle } from 'drizzle-orm/node-postgres';
import {config} from 'dotenv';

config({ path: '.env.local' });

export const db = drizzle(process.env.DATABASE_URL!); // Example: Check if db is connected (add a simple query as a test)
