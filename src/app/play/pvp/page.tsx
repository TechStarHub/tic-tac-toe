'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import TossCoin from '@/components/Play/TossCoin/TossCoin';
import Game from '@/components/Play/PvP/Game';

export default function PlayPvP() {
  const tossDialogRef = useRef<HTMLDialogElement>(null);
  const [tossCoinDone, setTossCoinDone] = useState([false, '']);
  const [showTossCoin, tossWonBy] = tossCoinDone;
  console.log(tossCoinDone);
  return (
    <div className="w-full h-full flex flex-col items-center">
      <motion.dialog
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        ref={tossDialogRef}
        open={!showTossCoin}
        className="fixed top-[20%] backdrop:bg-black/20 backdrop-blur-sm bg-white shadow-md rounded-lg "
      >
        <TossCoin setTossCoinDone={setTossCoinDone} />
      </motion.dialog>
      {showTossCoin ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full h-full "
        >
          <Game startingTurn={tossWonBy === 'heads' ? '1' : '2'} />
        </motion.div>
      ) : (
        ''
      )}
    </div>
  );
}
