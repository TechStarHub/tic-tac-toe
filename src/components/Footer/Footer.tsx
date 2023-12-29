import BrandLogo from '../BrandLogo';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-4 bg-slate-200 flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row w-full justify-between ">
        <div className="">
          <div className="min-h-[40px] w-fit">
            <Link href="/">
              <BrandLogo />
            </Link>
          </div>
          <p className="text-sm mt-2 sm:w-[300px]">
            <span className="font-medium">Tic Tac Toe</span> is a simple game
            built with NextJs, ReactJs, TypeScript, TailwindCSS.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className=" text-sm mb-2">
            Build with <span className="font-medium">NextJs</span> and{' '}
            <span className="font-medium">Tailwindcss</span>
          </p>
          <div className="flex gap-2 justify-center ">
            <Image src="/next.svg" width={80} height={80} alt="logo" />
            <Image src="/tailwindcss.svg" width={50} height={50} alt="logo" />
          </div>
        </div>
        <div className="">
          <ul className="flex items-center justify-center gap-3">
            <li className="">
              <Link href="/terms">
                <span className="font-medium text-sm">Terms</span>
              </Link>
            </li>
            <li className="">
              <Link href="/faqs">
                <span className="font-medium text-sm">FAQs</span>
              </Link>
            </li>
            <li className="">
              <Link href="/license">
                <span className="font-medium text-sm">License</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-t  border-slate-400" />
      <div className="flex justify-center">
        <span className="text-slate-900 font-medium text-sm">
          &copy; {new Date().getFullYear()}{' '}
          <span className="">Tic Tac Toe</span> by{' '}
          <Link href="https://github.com/TechStarHub" target="_blank">
            <span className="">TechStarHub</span>
          </Link>
        </span>
      </div>
    </footer>
  );
}
