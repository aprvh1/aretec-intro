import React from 'react';
import './App.css';
import { Header } from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {require("./Aretec-Logo.jpeg")} className="App-logo" alt="AreteC-Logo"/>
        <Header info="AreteC Learning"></Header>

          <p className="App-body">
          With the everlasting growing world, the diversity of bright 
          brains are growing progressively. The world is continuously 
          demanding for sharp and vivid minds to lead the people, and 
          so is the continuously growing competition universally. The 
          base of every competitive exam starts and proceed from childhood. 
          The online education has become a trend these days as 
          people want their children to grow and thrive in every aspect 
          of life. The online education platform boosts the level of studies.
          </p>

          <p className="App-body">
          AreteC focuses on excellence of education clearing all concepts 
          in the realm of education. The main agenda is to prepare 
          the students for the best by providing them with the most 
          suited platform for their education and general growth. We
          believe in leading from the start and therefore the major
          goal of AreteC is to make the students lead the world.
          </p>
      
      </header>
      <Footer trademark="Contact Us: rambhuk.aretec@gmail.com, +91 9113625880"></Footer>
    </div>
  );
}

export default App;
