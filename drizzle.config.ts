import { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL as string,
    host: "db.qqcoxpozypdmxddkpkjg.supabase.co",
    user: "postgres",
    password: "Pushpalatha@202",
    port: 5432,
  },
} satisfies Config;
