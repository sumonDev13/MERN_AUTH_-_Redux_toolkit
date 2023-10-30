import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
