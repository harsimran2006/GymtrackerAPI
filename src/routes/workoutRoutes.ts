import { Router, Request, Response } from "express";
import pool from "../db";

const router = Router();

// GET all workouts
router.get("/", async (_req: Request, res: Response) => {
    const [rows] = await pool.query("SELECT * FROM workouts");
    res.json(rows);
});

// POST a new workout
router.post("/", async (req: Request, res: Response) => {
    const { user_id, exercise, sets, reps, weight } = req.body;

    const [result] = await pool.query(
        "INSERT INTO workouts (user_id, exercise, sets, reps, weight) VALUES (?, ?, ?, ?, ?)",
        [user_id, exercise, sets, reps, weight]
    );

    res.json({
        message: "Workout added successfully",
        result
    });
});

export default router;