import React from 'react';
import './Experience.css'; // Import the separate CSS file
import experiences from '../../static/data/work-experience.json'

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
            <div className="experienceAccordionPeriod">{experience["start"]}-{experience["end"]}</div>
          </div>
          <div className="experienceAccordionContent">
            <div className="experienceAccordionContentHeader">
              <div className="experienceAccordionContentLocation">
                <div className="experienceAccordionContentLocationIcon">
                </div>
                <div className="experienceAccordionContentLocationText">
                  {experience["location"]}
                </div>
              </div>
              <div className="experienceAccordionContentWebsite">
                <div className="experienceAccordionContentWebsiteIcon">
                </div>
                <div className="experienceAccordionContentWebsiteText">
                {experience["website"]}
                </div>
              </div>
            </div>
            <div className="experienceAccordionContentAchievements">
              <ul>
                {experience["achievements"].map((achievement) => <li className="experienceAccordionContentAchievement">{achievement}</li>)}
              </ul>
            </div>
          </div>
        </div>)}
      </section>
    );
  };
  export default Experience;