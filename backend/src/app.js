import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/v1/hello", (req, res) => {
  res.send("Hello World");
});

export { app };
