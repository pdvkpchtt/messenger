import express from "express";
import { prisma } from "./src/db.js";

const app = express();

app.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`service_auth running on port ${PORT}`);
});
