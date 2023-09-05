import React from 'react';
import './Project.css'; // Import the separate CSS file
import projects from '../../static/data/projects.json'
// import { CiLocationOn, CiLemon } from 'react-icons/ci';
// import { TbClick } from 'react-icons/tb';

const Experience = () => {
  // const project = projects[0]
    return (
      <section className="projectContainer">
        <h2 id="h2-title" className='projectsHeader'>PROJECTS</h2>
        <h2 id="h2-subtitle" className='projectsSubHeader'>My Projects</h2>
        <div className="projectsShowcaseContainer">
        {
          projects.map((project) =>            
            <div className='projectShowcaseContainer'>
              <div className='projectTitle'>{project["title"]}</div>
              <div className='projectType'>{project["type"]}</div>
              <div className="projectImageWrapper"><img className="projectImage" src={`${project["img"]}`} /></div>
              <div className="projectDescription">{project["description"]}</div>
              <ul className='projectTechnologies'>
                {project["technologies"].map((technology) => <li className="projectTechnology">{technology}</li>)}
              </ul>
            </div>
          )
        }
        </div>
      </section>
    );
  };
  export default Experience;