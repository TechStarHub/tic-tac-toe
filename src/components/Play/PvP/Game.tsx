'use client';
import { useState, useEffect } from 'react';
import Piece from '../../TicTagToe/Piece';
import PlayerNameTurn from './PlayerNameTurn';
import WinnerResult from './WinnerResult';
import { getWinner } from '@/game-theory';

export default function Game({ startingTurn }: { startingTurn: string }) {
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [turn, setTurn] = useState(startingTurn);
  const [winner, setWinner] = useState('');

  const checkWinner = () => {
    const winner = getWinner(board);
    if (winner !== '') {
      setWinner(winner);
      console.log(winner, 'wins');
    }
  };

  const handleTurn = (i: number, j: number) => {
    if (board[i][j] !== '') return;
    if (winner !== '') return;
    if (turn === '1') {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[i][j] = 'X';
        return newBoard;
      });
      setTurn('2');
    } else {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[i][j] = 'O';
        return newBoard;
      });
      setTurn('1');
    }
  };

  const handleReset = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setTurn(startingTurn);
    setWinner('');
  };

  useEffect(() => {
    checkWinner();
  }, [board, turn]);

  return (
    <div className="w-full flex flex-col items-center py-4 relative">
      <div className="w-[350px] sm:w-[400px] flex justify-between items-center p-2">
        <PlayerNameTurn
          name={player1}
          setName={setPlayer1}
          isTurn={turn === '1'}
        />
        <PlayerNameTurn
          name={player2}
          setName={setPlayer2}
          isTurn={turn === '2'}
        />
      </div>
      <div className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] flex justify-center items-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 rounded bg-slate-200 m-2 w-full h-full ">
          {board.map((row, i) =>
            row.map((piece, j) => (
              <div
                key={`${i}-${j}`}
                onClick={(e: any) => handleTurn(i, j)}
                className=""
              >
                <Piece type={piece} />
              </div>
            )),
          )}
        </div>
      </div>
      {winner !== '' ? (
        <WinnerResult
          playerName={winner === 'X' ? player1 : player2}
          winner={winner}
          handleReset={handleReset}
        />
      ) : (
        ''
      )}
    </div>
  );
}
