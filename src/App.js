import React from 'react';
import './App.css';
import { Element } from 'react-scroll'
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>
        <div className="content">
          <Element id='landing' name='landing' className='landing'>
            <Landing />
          </Element>
          <Element id='about' name='about' className='about'>
            <AboutMe />
          </Element>
          <Element id='experience' name='experience' className='experience'>
            <Experience />
          </Element>
          <Element id='project' name='project' className='project'>
            <Project />
          </Element>
          <Element id='contact' name='contact' className="contact">
            <Contact />
          </Element>

        </div>
        <Footer />
    </div>
  );
}

export default App;
