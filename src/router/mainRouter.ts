import { Router } from "express";
import userRouter from "../user/user-router";
import questRouter from "../quest/quest-router";

const router = Router();
console.log("in main router");
// Mount the routers
router.use("/user", userRouter);
router.use("/quest", questRouter);

export default router;
