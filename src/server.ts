import express, { Request, Response, Express } from "express";
import router from "./routes";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("backend - auth practice");
});

router(app);

app.listen(3000, () => {
  console.log("Application started on http://localhost:3000/");
});