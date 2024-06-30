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

app.get('/api/skills', (req, res) => {
    const skills = [
        {id: 1, title: 'C++', image: `https://cdn.icon-icons.com/icons2/3398/PNG/512/plus_logo_c_icon_214621.png`, description: 'Proficient in C++ programming, problem solving, and Algorithms.'},
        {id: 2, title: 'Python', image: 'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png', description: 'Developed numorous automation scripts using Python programming language.'},
        {id: 3, title: 'Javascript', image: "https://w7.pngwing.com/pngs/559/894/png-transparent-js-square-brands-icon.png", description: 'Developed multiple web applications using Javascript programming language. Please have a look at them in the projects section.'}, 
        {id: 4, title: 'Nodejs', image: "https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_nodejs_icon_157858.png", description: 'Created server-side applications and APIs using Nodejs. Please have a look at them in the projects section.'},
    ]
    res.json(skills);
})

// All other requests will be handled by the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.listen(PORT, () => {console.log(`Server is running at port ${PORT}`);})