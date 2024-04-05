import { config } from "dotenv";

config();

export const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/";
export const PORT = Number(process.env.PORT || 3001);
export const SALT = Number(process.env.SALT || 8);

export const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || "my_secret";
export const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "my_secret";

export const PROD = Boolean(process.env.PROD) || false;
export const ORIGIN = process.env.ORIGIN || ["http://localhost:3000"];
