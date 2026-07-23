import { Router } from "express";
import pool from "../db";

const router = Router();

router.get("/", async (_req, res) => {
    const [rows] = await pool.query("SELECT * FROM JuiceReports");
    res.json(rows);
});

export default router;