import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Landing />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
