import mongoose from "mongoose";

const connectMongoDB = async () => {
  await mongoose.connect("");
  console.log("MongoDB connected");
};

export { connectMongoDB };
