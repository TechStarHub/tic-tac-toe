'use client';
import Board from './Board';
import { IoGameControllerOutline, IoGameController } from 'react-icons/io5';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function TicTagToe() {
  const router = useRouter();
  return (
    <div className={`w-full max-w-[400px] max-h-[400px] relative`}>
      <motion.div
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 4.7 }}
        className=""
      >
        <Board />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center  "
      >
        <h3 className="text-center text-3xl font-bold">
          Play Tic Tac Toe with a friend!
        </h3>
        <button
          type="button"
          onClick={() => router.push('/tic-tac-toe')}
          role="link"
          aria-placeholder="Start Tic Tac Toe"
          className="text-xl text-white mt-6 px-8 py-2 bg-indigo-500 rounded font-medium flex items-center gap-2 hover:bg-indigo-600 hover:shadow-md transition-all duration-500 group "
        >
          Start
          <span className="">
            <IoGameControllerOutline className="text-2xl group-hover:hidden " />
            <IoGameController className="text-2xl hidden group-hover:block" />
          </span>
        </button>
      </motion.div>
    </div>
  );
}
