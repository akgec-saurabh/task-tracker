import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Some Error Occured");
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at PORT : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO_DB Connection failed !!! ", err);
  });
