import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/v1/hello", (req, res) => {
  res.send("Hello World");
});

// routes
app.use("/api/v1/users", userRoutes);

// not found middleware
app.use((req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found!`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
  });
});

export { app };
