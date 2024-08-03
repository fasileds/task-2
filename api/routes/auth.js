import express from "express";
import { logIn, register } from "../controler/auth.js";

const routes = express.Router();

routes.post("/register", register);
routes.post("/login", logIn);

export default routes;
