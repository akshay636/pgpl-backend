import { Router } from "express";
import { invokeControllerRequest } from "../../../shared/middleware/invokeControllerRequest";
import { getUser } from "../controller/getusers";
// import { controllerHandler } from "../../../shared/lib/controllerHandler";
// import { getConnectionsReport } from "../controllers/getConnectionsReport";
// import authPrimary from "../../../shared/middlewares/authPrimary";


const router = Router();
router.get('/',invokeControllerRequest({
  controller: getUser,
}))

export const userRouter = router;
