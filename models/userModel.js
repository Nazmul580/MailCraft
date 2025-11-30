import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: { type: String, required: false },
});

export const User = mongoose.models?.User ?? mongoose.model("User", userSchema);
