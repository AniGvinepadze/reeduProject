const express = require("express");
const connectToDb = require("./db/connectToDb");
const userRouter = require("./users/user.router");
// const feedbackRouter = require('./feedback/feedback.router')

const app = express();
const cors = require("cors");
const postsRouter = require("./posts/posts.router");
const authRouter = require("./auth/auth.router");
// const isAuth = require("./middlewares/isAuth.middleaware");

app.use(express.json());
app.use(cors());

connectToDb();

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/posts", postsRouter);
// app.use("/feedback",feedbackRouter)

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
