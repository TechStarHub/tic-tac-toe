import Piece from '../TicTagToe/Piece';

type BoardProps = {
  pieces: string[][];
  size?: number;
};

export default function Board({ pieces }: BoardProps) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 rounded bg-slate-200 m-2 w-full h-full ">
      {pieces.map((row, i) =>
        row.map((piece, j) => (
          <div key={`${i}-${j}`} className="">
            <Piece type={piece} />
          </div>
        )),
      )}
    </div>
  );
}
