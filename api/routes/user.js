import express from "express";
import { varifyUser } from "../midlware/varifyToken.js";
import { deleateUser, getSinglUser, updateUser } from "../controler/user.js";

const routes = express.Router();

routes.get("/:id", getSinglUser);
routes.patch("/updatUser/:id", varifyUser, updateUser);
routes.delete("/deleate/:id", varifyUser, deleateUser);

export default routes;
