import BrandLogo from './BrandLogo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-4 bg-slate-200 flex justify-between items-center ">
      <Link href="/">
        <BrandLogo />
      </Link>
    </footer>
  );
}
