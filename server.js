import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express()
const PORT = process.env.PORT || 5000;

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Enable CORS for all routes
app.use(cors());

// serve static files from the react app
app.use(express.static(path.join(__dirname, 'client/build')))

// 
app.get('/api/projects', (req, res) => {
    const projects = [
        {id: 1, title: 'Project 1', description: 'Project 1 description'},
        {id: 2, title: 'Project 2', description: 'Project 2 description'},
        {id: 3, title: 'Project 3', description: 'Project 3 description'},
        {id: 4, title: 'Project 4', description: 'Project 4 description'}
    ]
    res.json(projects);
})

// All other requests will be handled by the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.listen(PORT, () => {console.log(`Server is running at port ${PORT}`);})