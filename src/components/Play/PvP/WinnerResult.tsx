'use client';
import { FaCrown } from 'react-icons/fa';

type WinnerResultProps = {
  playerName: string;
  winner: string;
  handleReset: () => void;
};

export default function WinnerResult({
  playerName,
  winner,
  handleReset,
}: WinnerResultProps) {
  return (
    <div className="w-[350px] min-h-[200px] absolute top-[35%] flex flex-col gap-2 items-center justify-center backdrop-blur bg-slate-300/30 p-4 rounded shadow-md ">
      <div className="flex gap-2 items-center ">
        {winner !== 'T' ? (
          <>
            <span className="text-2xl font-bold text-slate-900">
              {playerName}
            </span>
            <span className="text-2xl font-bold text-slate-900">wins</span>
            <FaCrown className="text-3xl text-yellow-500" />
          </>
        ) : (
          <span className="text-2xl font-bold text-slate-900">
            {`It's a tie !`} {/* to pass lint error */}
          </span>
        )}
      </div>
      <div className="w-full flex flex-col gap-3">
        <button
          onClick={handleReset}
          type="button"
          className="font-medium bg-slate-400/30 backdrop-blur p-2 rounded text-slate-900 w-full hover:bg-sky-500 hover:text-white transition-all duration-300 "
        >
          Play Again without Toss
        </button>
        <button
          onClick={handleReset}
          type="button"
          className="font-medium bg-slate-400/30 backdrop-blur p-2 rounded text-slate-900 w-full hover:bg-sky-500 hover:text-white transition-all duration-300 "
        >
          Play Again with Toss
        </button>
      </div>
    </div>
  );
}
