import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI).then((data) => {
    console.log(`MongoBD connected to ${data.connection.host}`);
  });
};
