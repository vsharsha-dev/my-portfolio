import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // async function fetchProjects() {
        //     const response = await axios.get('api/projects')
        //     const data = await response.data;
        //     setProjects(data);
        // }
        // fetchProjects()

        axios.get('/api/projects')
            .then(response => {
                setProjects(response.data);
                console.log(projects);
            })
            .catch(error => {
                console.error('Error fetching projects: ', error);
            })
    }, [projects])

    return <div>
        <h1>My Projects</h1>
        <ul>
            {
                projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </li>
                ))  
            }
        </ul>
    </div>
}

export default Projects;