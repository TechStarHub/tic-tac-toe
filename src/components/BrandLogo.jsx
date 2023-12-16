import { GiTicTacToe } from 'react-icons/gi';
import { FaTag } from 'react-icons/fa';

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-1 group ">
      <GiTicTacToe className="text-3xl group-hover:text-4xl transition-all duration-500" />
      <span className="text-xl flex items-center gap-1 group-hover:translate-x-1 transition-all duration-500">
        <span className="font-bold ">Tic</span>
        <FaTag className="text-xl " />
        <span className="font-bold ">Toe</span>
      </span>
    </div>
  );
}
