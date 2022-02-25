import "dotenv/config";
import { port, cleanEnv } from "envalid";
export const config = cleanEnv(process.env, {
  PORT: port(),
});
