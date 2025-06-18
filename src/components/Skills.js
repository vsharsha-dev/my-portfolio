import './styles/Skills.css';
import data from "../db/db.json"

const Skills = () => {

  const skills = data["skills"]

    return <div className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        {skills.map((skill) => {
          return <div className="skill" key={skill["id"]}>
            <img className="skill-image" src={skill["image"]} alt={`${skill["title"]}`}/>
            <p>{skill["description"]}</p>
          </div>
        })}
      </div>
    </div>
}

export default Skills;