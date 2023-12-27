import Image from 'next/image';
import { HiUsers } from 'react-icons/hi2';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsRobot } from 'react-icons/bs';
import { GiRobotGrab } from 'react-icons/gi';
import PlayMenuItem from './PlayMenuItem';

export default function PlayMenu() {
  //todo: add background
  //   const createBg = (numberOfElements: number) => {
  //     let bg = [];
  //     for (let i = 0; i < numberOfElements; i++) {
  //       bg.push(
  //         <div
  //           className={`w-full h-full absolute -z-50`}
  //           style={{
  //             top: `${Math.random() * 100}%`,
  //             left: `${Math.random() * 100}%`,
  //           }}
  //         >
  //           {i % 2 === 0 ? (
  //             <Image src="/cross.png" width={50} height={50} alt="bg" />
  //           ) : (
  //             <Image src="/circle.png" width={50} height={50} alt="bg" />
  //           )}
  //         </div>,
  //       );
  //     }
  //     return bg;
  //   };

  return (
    <div className="w-full sm:w-[80vw] lg:w-[60vw] p-4 rounded ">
      <div className="flex flex-col justify-center gap-3 ">
        <PlayMenuItem url="/play/ai">
          <GiRobotGrab className="w-[2rem] h-[2rem] translate-x-11 -translate-y-12 opacity-0 group-hover:opacity-100  group-hover:translate-y-0 transition-all duration-500" />
          <BsRobot className="w-[2rem] h-[2rem] group-hover:opacity-0 group-hover:translate-y-12 transition-all duration-500" />
          <span className="font-medium text-lg">Play against an AI</span>
        </PlayMenuItem>
        <PlayMenuItem url="/play/pvp">
          <HiOutlineUsers className="w-[2rem] h-[2rem] translate-x-11 -translate-y-12 opacity-0 group-hover:opacity-100  group-hover:translate-y-0 transition-all duration-500" />
          <HiUsers className="w-[2rem] h-[2rem] group-hover:opacity-0 group-hover:translate-y-12 transition-all duration-500" />
          <span className="font-medium text-lg">Play against a friend</span>
        </PlayMenuItem>
      </div>
    </div>
  );
}
