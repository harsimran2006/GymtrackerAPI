import express from "express";
import connection from "../db";

const router = express.Router();

router.get("/", (req, res) => {

    connection.query(
        "SELECT * FROM JuiceReports",
        (err, results) => {

            if (err) {
                res.status(500).json(err);
                return;
            }

            res.json(results);
        }
    );
});

export default router;