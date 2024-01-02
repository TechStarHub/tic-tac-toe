'use client';
import { useState, useRef, Dispatch } from 'react';
import { TbEdit } from 'react-icons/tb';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type PlayerNameTurnProps = {
  name: string;
  isTurn: boolean;
  setName: Dispatch<string>;
};

export default function PlayerNameTurn({
  name,
  isTurn,
  setName,
}: PlayerNameTurnProps) {
  const [showDialog, setShowDialog] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOnSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const playerName = event.currentTarget['player-name'].value;
    if (playerName.trim() === '') {
      setShowDialog(false);
      return;
    }
    setName(playerName);
    setShowDialog(false);
    console.log(playerName);
  };

  return (
    <div className="">
      <div className="flex items-center gap-1 bg-slate-400/30 backdrop-blur p-1 rounded">
        <button
          onClick={() => setShowDialog(true)}
          type="button"
          className="p-1 rounded hover:bg-slate-400/50 transition-all duration-300"
        >
          <TbEdit className="text-xl text-slate-900" />
        </button>
        <span className="text-lg font-bold text-slate-900 max-w-[80px] text-nowrap text-ellipsis overflow-hidden truncate ">
          {name}
        </span>
        <span className="">
          {isTurn ? (
            <span className="flex items-center gap-2">
              {`'s turn`} {/* to pass lint error */}
              <AiOutlineLoading3Quarters className="animate-spin text-xl font-bold" />
            </span>
          ) : (
            ''
          )}
        </span>
      </div>
      <dialog
        ref={dialogRef}
        open={showDialog}
        className="fixed top-[40%] z-50 rounded-lg shadow-md backdrop backdrop:w-screen backdrop:bg-slate-400/30 backdrop:h-screen backdrop-filter backdrop-blur-sm "
      >
        <form
          onSubmit={handleOnSave}
          className="w-[350px] bg-white p-4 rounded-lg "
          action={''}
        >
          <label htmlFor="player-name" className="w-full">
            <input
              type="text"
              className="w-full px-2 py-1 rounded border border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
              name="player-name"
              id="player-name"
              placeholder="Player Name e.g. Player 1"
            />
          </label>
          <div className="w-full flex items-center justify-center gap-4 mt-4">
            <button
              type="submit"
              className="text-lg font-medium px-2 py-1 rounded bg-gray-200 hover:bg-gray-400 "
            >
              Save
            </button>
            <button
              onClick={() => setShowDialog(false)}
              type="button"
              className="text-lg font-medium px-2 py-1 rounded bg-gray-200 hover:bg-gray-400 "
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
