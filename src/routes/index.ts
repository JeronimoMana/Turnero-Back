import { Router } from "express";
import { UserController } from "../controllers";

const router: Router = Router();

router.get("/users", UserController);


export default router