const express = require("express");
const router = express.Router();
const db = require("../db/mysql-db");

router.get("/", async (req, res) => {
    const data = await db.query("SELECT * FROM companies");
    return res.json(data.rows);
});

router.post("/", async (req, res) => {
    const data = await db.query(
        "INSERT INTO companies (name) VALUES ($1) RETURNING *",
        [req.body.name]
    );
    return res.json(data.rows[0]);
});

router.patch("/:id", async (req, res) => {
    const data = await db.query(
        "UPDATE companies SET name=$1 WHERE id=$2 RETURNING *",
        [req.body.name, req.params.id]
    );
    return res.json(data.rows[0]);
});

router.delete("/:id", async (req, res) => {
    await db.query("DELETE FROM companies WHERE id=$1", [
        req.params.id
    ]);
    return res.json({ message: "Deleted" });
});

module.exports = router;