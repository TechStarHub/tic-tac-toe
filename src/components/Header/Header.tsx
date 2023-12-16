import Link from 'next/link';
import NavBar from './Nav';
import BrandLogo from '@/components/BrandLogo';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 h-[72px] ">
      <Link href="/" className="">
        <BrandLogo />
      </Link>
      <NavBar />
    </header>
  );
}
