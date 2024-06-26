import axios from "axios";
import React, { useState, useEffect } from "react";
import './styles/Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

    useEffect(() => {
      axios.get('/api/skills')
        .then(response => {
            setSkills(response.data);
        })
        .catch(error => {
            console.error('Error fetching skills: ', error);
        })
    }, [skills])

    return <div className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        {skills.map((skill) => {
          return <div className="skill" key={skill.id}>
            <img className="skill-image" src={skill.image} alt={`${skill.title}`}/>
            <p>{skill.description}</p>
          </div>
        })}
      </div>
    </div>
}

export default Skills;