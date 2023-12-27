'use client';
import { useState } from 'react';
import Board from './PlayBoard';

export default function Game() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState('');

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[400px] h-[400px]">
        <Board pieces={board} />
      </div>
    </div>
  );
}
