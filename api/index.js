import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

import { connectDB } from "../config/db.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
