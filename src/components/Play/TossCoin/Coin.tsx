type CoinProps = {
  label: string;
  image?: string;
};

export default function Coin({ label, image }: CoinProps) {
  return (
    <div className="w-full h-full bg-yellow-500 border-[10px] outline outline-slate-500 outline-[1px] border-yellow-600  rounded-full grid place-items-center ">
      <span className="text-2xl font-bold text-slate-900">{label}</span>
    </div>
  );
}
