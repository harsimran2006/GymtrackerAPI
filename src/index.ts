import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes";
import workoutRoutes from "./routes/workoutRoutes";
import juiceReportRoutes from "./routes/juiceReportRoutes";
import progressRoutes from "./routes/progressRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/workouts", workoutRoutes);
app.use("/juicereports", juiceReportRoutes);
app.use("/progress", progressRoutes);

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});