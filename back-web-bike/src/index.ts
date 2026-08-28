import "dotenv/config";
import express, { type Request, type Response } from "express";
import rootRouter from "./routes/index.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "Pong server running" });
});

app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
