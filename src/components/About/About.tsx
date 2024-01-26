"use client"
import React, { useState } from "react";
import "../../css/About.css"
const About = () => {
  const [step, setStep] = useState(0);

  const content = [
    {
      title: "Welcome to Tic Tac Toe",
      description:
        "Welcome to the ultimate Tic Tac Toe experience! Our web app, crafted with the cutting-edge technologies Next.js and Tailwind CSS, brings this classic game to life in a modern and engaging way. Whether you're a seasoned player or just looking for some casual fun, our Tic Tac Toe web app offers a variety of exciting features to suit your gaming preferences.",
    },
    {
      title: "Game Features",
      description: "    ",
    },
    {
      title: "Play Against AI:",
      description:
        "Challenge yourself against our advanced AI algorithm that adapts to your skill level. Whether you're a beginner or a Tic Tac Toe master, the AI provides a challenging and enjoyable gaming experience.",
    },
    {
      title: "Two-Player Mode:",
      description:
        "Grab a friend or family member and go head-to-head in our two-player mode. The classic showdown takes on a new digital twist as you compete for victory on the virtual game board.",
    },
    {
      title: " Create Playroom:",
      description:
        "Feeling social? Create your own playroom and invite friends to join you for a game. With just a click, you can generate a unique link to share and let others seamlessly connect to your playroom.",
    },
    {
      title: "Shareable Links",
      description:
        "   Easily share your playroom link with friends, family, or anyone you want to challenge. It's a hassle-free way to connect and enjoy a game of Tic Tac Toe together, no matter where you are.",
    },
    {
      title: "Next.js & Tailwind CSS:",
      description:
        "   Our web app is built on the robust Next.js framework, ensuring a smooth and responsive user experience. The sleek and modern design is powered by Tailwind CSS, providing a visually appealing and user-friendly interface",
    },
  ];

  const handleClick = () => {
    
    setStep((step + 1) % content.length);
  };
  const handleclick1=()=>{
    if ( step==0 ){
        return (step+1) 
    }

    setStep(step-1);
  }

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="title">{content[step].title}</h1>
        <p className="description">{content[step].description}</p>
          <button className="previous-button" onClick={handleclick1} >
          Previous
        </button>
        <button className="next-button" onClick={handleClick}>
          Next
        </button>
      
        
      </div>
    </div>
  );
};

export default About;
