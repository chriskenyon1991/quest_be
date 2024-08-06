import { Router, Request, Response } from "express";
import { User } from "./user-model";
import { getAll, get, create, update } from "../controller/basicController";
import bodyParser from "body-parser";

const router = Router();

var jsonParser = bodyParser.json();
router.get("/", async (req: Request, res: Response) => {
  let result;
  if (req.query.id) result = await get(User, req.query.id, "user");
  else result = await getAll(User, req.query, "user");
  res.send(result);
});

router.post("/:id", jsonParser, async (req: Request, res: Response) => {
  console.log("update user ", Number(req.params.id));
  try {
    await update(User, Number(req.params.id), req.body, "user");
    res.send({ message: "success" });
  } catch (error) {
    res.send(error);
  }
});

router.post("/", jsonParser, async (req: Request, res: Response) => {
  console.log("create new user");
  try {
    let result;
    if (req.query.id) result = await get(User, req.query.id, "user");
    else result = await create(User, req.body, "user");
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

export default router;
