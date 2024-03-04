import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const BAMBOOHR_API_KEY = Buffer.from(process.env.BAMBOOHR_API_KEY + ':').toString('base64');
export const API_BASE_URL = process.env.API_BASE_URL;
export const COMPANY_DOMAIN = process.env.COMPANY_DOMAIN;
