'use client';
import { useState } from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import Coin from './Coin';

type TossCoinProps = {
  setTossCoinDone: any;
};

export default function TossCoin({ setTossCoinDone }: TossCoinProps) {
  const [coinSide, setCoinSide] = useState(0); // {0: heads, 1: tails}
  const [coinFlipped, setCoinFlipped] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleCoinToss = () => {
    const flipResult = Math.round(Math.random());

    console.log(`It is ${flipResult === 0 ? 'heads' : 'tails'}`);

    setCoinFlipped(true);
    setCoinSide(flipResult);

    //  Show result after 3 seconds
    setTimeout(() => {
      setShowResult(true);
    }, 3000);

    // to be called from parent component to set the state of tossCoinDone to true
    if (setTossCoinDone) {
      setTimeout(() => {
        setTossCoinDone([true, flipResult === 0 ? 'heads' : 'tails']);
      }, 5000);
    }
  };

  // Provide animation to the coin based on the coinFlipped state
  const provideAnimation = () => {
    if (coinFlipped) {
      if (coinSide === 0) {
        return 'flipHeads 3s ease-out forwards ';
      } else {
        return 'flipTails 3s ease-out forwards ';
      }
    } else {
      return '';
    }
  };

  return (
    <div className="p-4 rounded bg-slate-200 flex flex-col items-center justify-center w-[300px]  ">
      <h4 className="text-center mb-4 font-medium text-2xl">
        Flip the coin to decide who goes first
      </h4>
      <button
        onClick={handleCoinToss}
        type="button"
        className=" w-[150px] h-[150px] rounded-full cursor-pointer relative outline-none  "
        style={{
          transformStyle: 'preserve-3d',
          animation: provideAnimation(),
          boxShadow:
            'inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4)',
          userSelect: 'none',
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full -z-[100] "
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(-180deg)',
            userSelect: 'none',
          }}
          id="heads"
        >
          <Coin label="Heads" />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full z-[100]  "
          style={{ backfaceVisibility: 'hidden', userSelect: 'none' }}
          id="tails"
        >
          <Coin label="Tails" />
        </div>
      </button>
      <div className="">
        {showResult && (
          <div className="text-xl font-medium mt-4">
            <span className="">
              <span className="">It is a </span>
              <span className="font-bold text-yellow-500 italic bg-clip-text text-transparent bg-gradient-to-b from-[#FFF65C] to-[#3A2C00]     ">
                {coinSide === 0 ? 'Heads' : 'Tails'}
              </span>
            </span>
          </div>
        )}
      </div>
      <div className="bg-sky-400/40 p-2 rounded mt-4 flex items-center gap-2">
        <span className="">
          <IoIosInformationCircleOutline className="text-sky-600  w-8 h-8" />
        </span>
        <p className="text-sm leading-snug  ">
          If the coin lands on heads, you go first. If it lands on tails, your
          opponent goes first.
        </p>
      </div>
    </div>
  );
}
