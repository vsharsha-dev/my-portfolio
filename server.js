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
        {id: 1, title: 'C++', image: "https://w7.pngwing.com/pngs/579/803/png-transparent-the-c-programming-language-programmer-computer-programming-programming-blue-logo-computer-program-thumbnail.png", description: 'Proficient in C++ programming and problem solving.'},
        {id: 2, title: 'Python', image: 'https://banner2.cleanpng.com/20180402/ioq/kisspng-python-logo-clojure-javascript-9-5ac25c2686ca38.9179638515226870145521.jpg', description: 'Developed numorous automation scripts using Python programming language.'},
        {id: 3, title: 'Javascript', image: "https://banner2.cleanpng.com/20180810/biz/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b6dbeb48e4583.2854840415339189005828.jpg", description: 'Developed multiple web applications using Javascript programming language. Please have a look at them in the projects section.'}, 
        {id: 4, title: 'Nodejs', image: "https://banner2.cleanpng.com/20180421/feq/kisspng-web-development-node-js-socket-io-javascript-netwo-modernization-5adab811677023.4675225415242834094237.jpg", description: 'Created server-side applications and APIs using Nodejs. Please have a look at them in the projects section.'},
    ]
    res.json(skills);
})

// All other requests will be handled by the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.listen(PORT, () => {console.log(`Server is running at port ${PORT}`);})