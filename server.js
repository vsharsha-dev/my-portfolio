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
app.use('/static', express.static(path.join(__dirname, 'client/build')))

// 
app.get('/api/projects', (req, res) => {
    const projects = [
        {id: 1, title: 'AnimeBio', image: '/static/images/portfolio-animebio.png', description: 'Project 1 description'},
        {id: 2, title: 'To Do List', image: '/static/images/cpp.png', description: 'Project 2 description'},
        {id: 3, title: 'COVID19 Tracker', image: '/static/images/portfolio-covidapp.png', description: 'Project 3 description'},
        {id: 4, title: 'Tindog', image: '/static/images/portfolio-tindog.png', description: 'Project 4 description'},
        {id: 5, title: 'FB Login Page', image: '/static/images/portfolio-fblogin.png', description: 'Project 4 description'},
        {id: 6, title: 'Simon Game', image: '/static/images/portfolio-simongame.png', description: 'Project 6 description'},
    ]
    res.json(projects);
})

app.get('/api/skills', (req, res) => {
    const skills = [
        {id: 1, title: 'C++', image: `https://cdn.icon-icons.com/icons2/3398/PNG/512/plus_logo_c_icon_214621.png`, description: 'Proficient in C++ programming, problem solving, and Algorithms.'},
        {id: 2, title: 'Python', image: 'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png', description: 'Developed numorous automation scripts using Python programming language.'},
        {id: 3, title: 'Javascript', image: "https://cdn-icons-png.flaticon.com/512/721/721671.png", description: 'Developed multiple web applications using Javascript programming language.'}, 
        {id: 4, title: 'Nodejs', image: "https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_nodejs_icon_157858.png", description: 'Created numorous server-side applications and APIs using Nodejs. Please have a look at them in the projects section.'},
        {id: 5, title: 'React', image: "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png", description: 'Worked on designing client side app components using React.'},
        {id: 6, title: 'Data Structures', image: "https://cdn-icons-png.flaticon.com/512/8637/8637707.png", description: 'Familiar with solving complex problems using Data Structures and Algorithms.'},
        {id: 7, title: 'Git and Gitlab', image: "https://git-scm.com/images/logos/downloads/Git-Icon-Black.png", description: 'Experienced with version control using git. Worked in collaboration with teams using Gitlab.'}
    ]
    res.json(skills);
})

app.get('/api/blogs', (req, res) => {
    const blogs = [
        {id: 1, title: 'Blog 1', description: 'Blog 1 description'},
        {id: 2, title: 'Blog 2', description: 'Blog 2 description'},
        {id: 3, title: 'Blog 3', description: 'Blog 3 description'},
        {id: 4, title: 'Blog 4', description: 'Blog 4 description'}
    ]
    res.json(blogs);
})

// All other requests will be handled by the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.listen(PORT, () => {console.log(`Server is running at port ${PORT}`);})