'use client';
import React, { useState } from 'react';

const About = () => {
  const [step, setStep] = useState(0);

  const content = [
    {
      title: 'Welcome to Tic Tac Toe',
      description:
        "Welcome to the ultimate Tic Tac Toe experience! Our web app, crafted with the cutting-edge technologies Next.js and Tailwind CSS, brings this classic game to life in a modern and engaging way. Whether you're a seasoned player or just looking for some casual fun, our Tic Tac Toe web app offers a variety of exciting features to suit your gaming preferences.",
    },
    {
      title: 'Play Against AI:',
      description:
        "Challenge yourself against our advanced AI algorithm that adapts to your skill level. Whether you're a beginner or a Tic Tac Toe master, the AI provides a challenging and enjoyable gaming experience.",
    },
    {
      title: 'Two-Player Mode:',
      description:
        'Grab a friend or family member and go head-to-head in our two-player mode. The classic showdown takes on a new digital twist as you compete for victory on the virtual game board.',
    },
    {
      title: ' Create Playroom:',
      description:
        'Feeling social? Create your own playroom and invite friends to join you for a game. With just a click, you can generate a unique link to share and let others seamlessly connect to your playroom.',
    },
    {
      title: 'Shareable Links',
      description:
        "   Easily share your playroom link with friends, family, or anyone you want to challenge. It's a hassle-free way to connect and enjoy a game of Tic Tac Toe together, no matter where you are.",
    },
    {
      title: 'Next.js & Tailwind CSS:',
      description:
        '   Our web app is built on the robust Next.js framework, ensuring a smooth and responsive user experience. The sleek and modern design is powered by Tailwind CSS, providing a visually appealing and user-friendly interface',
    },
  ];

  const handleNext = () => {
    setStep((prev) => (prev + 1) % content.length);
  };
  const handlePrev = () => {
    setStep((prev) => (prev - 1 + content.length) % content.length); // to avoid negative numbers
  };

  return (
    <div className="w-full h-full flex px-4 py-8 md:px-8">
      <div className="max-w-[1200px] w-full mx-auto">
        <h1 className="text-4xl font-bold text-[#333]">
          {content[step].title}
        </h1>
        <p className="text-lg mt-4 leading-7 text-[#666]">
          {content[step].description}
        </p>
        <div className="flex gap-3 mt-4">
          <button
            className="bg-[#4caf50] px-4 py-2 rounded text-white hover:bg-[#3e8e41] transition-all duration-300"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="bg-[#4caf50] px-4 py-2 rounded text-white hover:bg-[#3e8e41] transition-all duration-300"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
