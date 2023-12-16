'use client';
import { FaRegCircle } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

type PieceProps = {
  type?: string | 'X' | 'x' | 'O' | 'o';
  border?: boolean | false;
  delay?: number | 0;
};

export default function Piece({ type, border, delay }: PieceProps) {
  if (type === 'X' || type === 'x') {
    return (
      <div className="bg-slate-50 w-full h-full rounded shadow">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay, duration: 0.5 }}
          className={`w-full h-full flex justify-center items-center cursor-grab  rounded`}
          draggable
        >
          <IoClose
            className={`w-full h-full text-red-500 ${
              border && 'border border-black'
            } `}
          />
        </motion.div>
      </div>
    );
  } else if (type === 'O' || type === 'o') {
    return (
      <div className="bg-slate-50 w-full h-full rounded shadow">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay, duration: 0.5 }}
          className={`w-full h-full flex justify-center items-center cursor-grab rounded `}
          draggable
        >
          <FaRegCircle
            className={` w-[70%] h-[70%] text-blue-500 ${
              border && 'border border-black'
            } `}
          />
        </motion.div>
      </div>
    );
  } else {
    return <div className="bg-slate-50 w-full h-full rounded" draggable></div>;
  }
}
