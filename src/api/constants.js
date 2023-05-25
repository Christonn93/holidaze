// baseUrl
import env from "react-dotenv";

// export const baseUrl = process.env.API_BASEURL;
export const baseUrl = env.API_BASEURL;

// Endpoints for api
export const authReg = "/auth/register";
export const authLogin = "/auth/login";
export const profiles = "/profiles";
export const venues = "/venues";
export const bookings = "/bookings";
