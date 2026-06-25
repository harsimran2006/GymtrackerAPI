import { Router, Request, Response } from "express";
import pool from "../db";

const router = Router();

// ─── GET /  →  Get all progress records ─────────────────
router.get("/", async (_req: Request, res: Response) => {
  const [rows] = await pool.query("SELECT * FROM progress");
  res.json(rows);
});

// ─── POST /  →  Create a new progress record ────────────
router.post("/", async (req: Request, res: Response) => {
  const { user_id, weight, bmi, recorded_date } = req.body;

  if (!user_id || weight == null || bmi == null || !recorded_date) {
    res.status(400).json({ error: "user_id, weight, bmi and recorded_date are required" });
    return;
  }

  const [result]: any = await pool.query(
    "INSERT INTO progress (user_id, weight, bmi, recorded_date) VALUES (?, ?, ?, ?)",
    [user_id, weight, bmi, recorded_date]
  );

  res.status(201).json({ id: result.insertId, user_id, weight, bmi, recorded_date });
});

export default router;