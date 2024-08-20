import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { PROJECTS } from "./db/projects.js";
import { BLOGS } from "./db/blogs.js";
import { SKILLS } from "./db/skills.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Enable CORS for all routes
app.use(cors());

// serve static files from the react app
app.use("/static", express.static(path.join(__dirname, "client/build/static")));

//
app.get("/api/projects", (req, res) => {
  res.json(PROJECTS);
});

app.get("/api/skills", (req, res) => {
  res.json(SKILLS);
});

app.get("/api/blogs", (req, res) => {
  res.json(BLOGS);
});

// All other requests will be handled by the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
