'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoHome, IoHomeOutline } from 'react-icons/io5';
import { IoGameControllerOutline } from 'react-icons/io5';
import { IoGameController } from 'react-icons/io5';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoMdInformationCircle } from 'react-icons/io';

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="">
      <ul className="flex items-center gap-4">
        <li className="text-sm font-medium">
          <Link href="/">
            <span className="flex items-center gap-1 hover:-translate-y-1 transition-all duration-300">
              {pathname === '/' ? (
                <IoHome className="text-2xl" />
              ) : (
                <IoHomeOutline className="text-xl" />
              )}
              <span className="">Home</span>
            </span>
          </Link>
        </li>
        <li className="text-sm font-medium">
          <Link href="/play">
            <span className="flex items-center gap-1 hover:-translate-y-1 transition-all duration-300">
              {pathname === '/play' ? (
                <IoGameController className="text-2xl" />
              ) : (
                <IoGameControllerOutline className="text-xl" />
              )}
              <span className="">Play</span>
            </span>
          </Link>
        </li>
        <li className="text-sm font-medium">
          <Link href="/about">
            <span className="flex items-center gap-1 hover:-translate-y-1 transition-all duration-300">
              {pathname === '/about' ? (
                <IoMdInformationCircle className="text-2xl" />
              ) : (
                <IoMdInformationCircleOutline className="text-xl" />
              )}
              <span className="">About</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
