import { Router, Request, Response } from "express";
import { getAll, get, update, create } from "../controller/basicController";
import { Quest } from "./quest-model";
import bodyParser from "body-parser";

const router = Router();
var jsonParser = bodyParser.json();

router.get("/", async (req: Request, res: Response) => {
  try {
    let result;
    if (req.query.id) result = await get(Quest, req.query.id, "quest");
    else result = await getAll(Quest, req.query, "quest");
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.post("/:id", jsonParser, async (req: Request, res: Response) => {
  console.log("update quest ", Number(req.params.id));
  try {
    await update(Quest, Number(req.params.id), req.body, "quest");
    res.send({ message: "success" });
  } catch (error) {
    res.send(error);
  }
});

router.post("/", jsonParser, async (req: Request, res: Response) => {
  console.log("create new quest");

  try {
    let result;
    if (req.query.id) result = await get(Quest, req.query.id, "quest");
    else {
      const questData: Quest = req.body;
      questData.startDate = new Date();
      console.log(questData);
      result = await create(Quest, req.body, "quest");
    }
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

export default router;
