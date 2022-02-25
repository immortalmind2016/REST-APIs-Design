import express from "express";
import { config } from "./config";
import postsRoutes from "./routes/posts.routes";
import commentsRoutes from "./routes/comments.routes";

const app = express();

app.use("/api/posts", postsRoutes);
app.use("/api/posts/:postId/comments", commentsRoutes);

const start = async () => {
  app.listen(config.PORT);

  console.log(`Server has been started on port ${config.PORT}`);
};

start();
