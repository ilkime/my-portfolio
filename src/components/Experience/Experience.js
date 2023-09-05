import React from 'react';
import './Experience.css'; // Import the separate CSS file
import experiences from '../../static/data/work-experience.json'
import { CiLocationOn, CiLemon } from 'react-icons/ci';
import { TbClick } from 'react-icons/tb';

const Experience = () => {
  const experience1 = experiences[0]
    return (
      <section className="experienceContainer" style={{color:"white"}}>
        <h3 className="experienceHeader">EXPERIENCE</h3>
        <h1 className="experienceSubHeader">Professional Experience</h1>

      {experiences.map((experience, index) => 
        <div className='experienceSection'>
          <div id={"experienceAccordion-" + index.toString()} className="experienceAccordion">
            <div className="experienceAccordionJob">
            <div className="experienceAccordionTitle">{experience["title"]}</div>
            <div className="experienceAccordionCompany">@{experience["company"]}</div>
            </div>
            <div className="experienceAccordionPeriod">{experience["start"]} - {experience["end"]}</div>
          </div>
          <div className="experienceAccordionContent">
            <div className="experienceAccordionContentHeader">
              <div className="experienceAccordionContentLocation">
                <div className="experienceAccordionContentLocationIcon">
                  <CiLocationOn className="location-icon" />
                </div>
                <div className="experienceAccordionContentLocationText">
                  {experience["location"]}
                </div>
              </div>
              <div className="experienceAccordionContentWebsite">
                <div className="experienceAccordionContentWebsiteIcon">
                  <TbClick className="website-icon" />
                </div>
                <div className="experienceAccordionContentWebsiteText">
                {experience["website"]}
                </div>
              </div>
            </div>
            <ul className="experienceAccordionContentAchievements">
                {experience["achievements"].map((achievement) => <li className="experienceAccordionContentAchievement"><div className='experienceAccordionContentAchievementIcon'><CiLemon className='achievement-list-icon'/></div>{achievement}</li>)}
            </ul>
            <ul className='experienceAccordionContentTechnologies'>
              {experience["technologies"].map((technology) => <li className='experienceAccordionContentTechnology'>{technology}</li>)}
            </ul>
          </div>
        </div>)}
      </section>
    );
  };
  export default Experience;