import mongoose from "mongoose";

export async function dbConnect() {
  const mongoUri = process.env.MONGODB_CONNECTION_STRING;
  try {
    if (!mongoUri) throw new error("mongodb connection sting is not found!");

    const connection = await mongoose.connect(String(mongoUri));
    return connection;
  } catch (err) {
    console.log(err);
  }
}
