import PlayMenu from '@/components/Play/PlayMenu/PlayMenu';

export const metadata = {
  title: 'Play | Tic Tag Toe',
  description: 'Play menu for Tic Tag Toe',
};

export default function Play() {
  return (
    <div className="w-full flex flex-col items-center">
      <PlayMenu />
    </div>
  );
}
