import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./user.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
const URL_MONGOOOS = process.env.URL_MONGOOOS;
mongoose.connect(
  URL_MONGOOOS,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log(" conticting to db ")
);

app.post("/addname", async (req, res) => {
  console.log(req.body);
  const newUser = new User({
    fistName: req.body.fisrtName,
    lastName: req.body.lastName,
  });
  await newUser.save();
});

app.get("/getname", async (req, res) => {
  const getUser = await User.find();
  res.send(getUser);
});

app.listen(5000, () => console.log("server runinig "));
