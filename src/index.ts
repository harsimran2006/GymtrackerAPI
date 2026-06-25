
import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes";
import workoutRoutes from "./routes/workoutRoutes";
import juiceReportRoutes from "./routes/juiceReportRoutes";
import progessRoutes from "./routes/progressRoutes";
import progressRoutes from "./routes/progressRoutes";



const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/progress", progressRoutes);
app.use("/workouts", workoutRoutes);
app.use("/addworkouts", workoutRoutes);
app.use("/juicereports", juiceReportRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});