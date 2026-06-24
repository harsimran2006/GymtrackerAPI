import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes";
import workoutRoutes from "./routes/workoutRoutes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/workouts", workoutRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});