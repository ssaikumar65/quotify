import { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://postgres.qqcoxpozypdmxddkpkjg:Pushpalatha%40202@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
  },
} satisfies Config;
