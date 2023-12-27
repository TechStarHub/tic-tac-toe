import Link from 'next/link';

type PlayMenuItemProps = {
  url: string;
  children: React.ReactNode;
  numberOfBlobs?: number;
};

export default function PlayMenuItem({
  url,
  children,
  numberOfBlobs = 6,
}: PlayMenuItemProps) {
  const createBlobs = (numberOfBlobs: number) => {
    const blobs = [];
    for (let i = 0; i < numberOfBlobs; i++) {
      blobs.push(
        <div
          key={i}
          className="absolute w-[6rem] h-[6rem] rounded-full bg-slate-300/20 backdrop-blur -z-10"
          style={{
            top: `${(Math.random() - 0.5) * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%) scale(${Math.random()})`,
          }}
        />,
      );
    }
    return blobs;
  };
  return (
    <Link href={url}>
      <div className="w-full h-[55px] max-h-[55px] flex items-center justify-center gap-2 border rounded shadow overflow-hidden bg-slate-200/10 backdrop-blur px-4 py-2 hover:bg-slate-300 hover:border-slate-400 hover:shadow-lg hover:skew-x-[10deg] hover:scale-110 active:translate-y-1 transition-all duration-300 relative group">
        <div className="flex items-center justify-center gap-2 group-hover:-skew-x-[10deg] ">
          {children}
        </div>
        {createBlobs(numberOfBlobs)}
      </div>
    </Link>
  );
}
