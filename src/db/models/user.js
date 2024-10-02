import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
  fullname: String,
});

export default mongoose.models.User || mongoose.model("User", userSchema);
