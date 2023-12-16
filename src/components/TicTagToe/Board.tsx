import Piece from './Piece';

export default function Board() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 rounded bg-slate-200 m-2 ">
      <Piece delay={0.5} type="X" />
      <Piece delay={3} type="o" />
      <Piece delay={0} type="o" />
      <Piece delay={2} type="o" />
      <Piece delay={1} type="o" />
      <Piece delay={2.5} type="x" />
      <Piece delay={1.5} type="X" />
      <Piece delay={4} type="o" />
      <Piece delay={3.5} type="x" />
    </div>
  );
}
