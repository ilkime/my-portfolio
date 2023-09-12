import React, {useState} from 'react';
import './Project.css'; // Import the separate CSS file
import projects from '../../static/data/projects.json'
// import { CiLocationOn, CiLemon } from 'react-icons/ci';
// import { TbClick } from 'react-icons/tb';



const Project = () => {
  // const project = projects[0]
  const [isTruncated, setIsTruncated] = useState([]);

  const format_long_text = (text, index, max_length=50) => {
    console.log(isTruncated)
    if (text.length <= max_length){
      setIsTruncated([...isTruncated, {text: text, isFormated: false, display_text: text}])
      return <>{isTruncated[index]["display_text"]}</>
    } 
    setIsTruncated([...isTruncated, {text: text, isFormated: true, display_text: text.slice(0, max_length)}])
    return <>{isTruncated[index]["display_text"]}<a href="#" onclick={setExpand(index)}>...</a></>
  }

  const setExpand = (index, max_length=50) =>{
    var updated_text;
    if (!isTruncated[index]["isFormated"]){
      updated_text = isTruncated[index]["text"].slice(0, max_length)
    }
    else{
      updated_text = isTruncated[index]["text"]
    }
    setIsTruncated([...isTruncated.slice(0, index), {text: isTruncated[index]["text"], isFormated: !isTruncated[index]["isFormated"], display_text: updated_text}, ...isTruncated.slice(index + 1, isTruncated.length)])
  }

    return (
      <section className="projectContainer">
        <h2 id="h2-title" className='projectsHeader'>PROJECTS</h2>
        <h2 id="h2-subtitle" className='projectsSubHeader'>My Projects</h2>
        <div className="projectsShowcaseContainer">
        {
          projects.map((project, index) =>            
            <div className='projectShowcaseContainer'>
              <div className='projectTitle'>{project["title"]}</div>
              <div className='projectType'>{project["type"]}</div>
              <a className="projectImageWrapper" href={project["url"]}><img className="projectImage" src={`${project["img"]}`} /></a>
              <div className="projectDescription">{format_long_text(project["description"], index)}</div>
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
  export default Project;