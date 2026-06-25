//─────────────────────────────────────────────────────────
//  PRODUCT ROUTES
//  Handles all endpoints related to products.
//  Same pattern as userRoutes.ts Router + pool + export.
// ─────────────────────────────────────────────────────────

import { Router, Request, Response } from "express";
import pool from "../db";

const router = Router();

// ─── GET /  →  Get all products ───────────────────────
router.get("/", async (_req: Request, res: Response) => {
  const [rows] = await pool.query("SELECT * FROM products");
  res.json(rows);
});

// ─── POST /  →  Create a new product ──────────────────
router.post("/", async (req: Request, res: Response) => {
  const { name, price } = req.body;

  if (!name || price == null) {
    res.status(400).json({ error: "name and price are required" });
    return;
  }

  const [result]: any = await pool.query(
    "INSERT INTO products (name, price) VALUES (?, ?)",
    [name, price]
  );

  res.status(201).json({ id: result.insertId, name, price });
});

export default router;