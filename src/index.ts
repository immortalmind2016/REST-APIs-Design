import express from "express";
import { config } from "./config";
import postsRoutes from "./routes/posts.routes";

const app = express();

app.use("/posts", postsRoutes);

const start = async () => {
  app.listen(config.PORT);

  console.log(`Server has been started on port ${config.PORT}`);
};

start();
