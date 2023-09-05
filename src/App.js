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
      <Navbar />
      
       
        <Element id='landing' name='landing'>
          <Landing />
        </Element>
        <Element id='about' name='about'>
          <AboutMe />
        </Element>
        <Element id='experience' name='experience'>
          <Experience />
        </Element>
        <Element id='project' name='project'>
          <Project />
        </Element>
        <Element id='contact' name='contact'>
          <Contact />
        </Element>
        <Footer />
    </div>
  );
}

export default App;
