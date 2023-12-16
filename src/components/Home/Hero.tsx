import TicTagToe from '../TicTagToe/TicTagToe';

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center my-8">
      <h1 className="flex gap-1 mb-4">
        <span className="font-bold text-4xl">Tic</span>
        <span className="font-bold text-4xl">Tac</span>
        <span className="font-bold text-4xl">Toe</span>
      </h1>
      <TicTagToe />
    </section>
  );
}
