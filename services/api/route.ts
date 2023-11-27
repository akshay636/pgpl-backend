import { Router } from "express";
import { userRouter } from "../user/api";

// instantiating the router
const router = Router();
router.use('/user', userRouter)
// adding the routers from other modules(next layer router)


export default router;
