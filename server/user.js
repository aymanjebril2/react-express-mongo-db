import mongoose from "mongoose";

const User = new mongoose.Schema({
  fistName: String,
  lastName: String,
});

export default mongoose.model("user", User);
