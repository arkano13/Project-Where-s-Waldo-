import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import playerRouter from "./routes/playerRoutes.js";
import characterRouter from "./routes/characterRoutes.js";
import cors from "cors";

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // tu Vite dev server
  credentials: true,
}));

app.use("/api/players", playerRouter);
app.use("/api/characters", characterRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
