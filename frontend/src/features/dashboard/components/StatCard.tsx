import { MdArrowOutward } from "react-icons/md";

function StatCard({ color, icon, value, name }) {
  return (
    <div
      className={`flex flex-col gap-2 p-3 border border-white/10 rounded-md ${color} shadow-lg bg-linear-to-br  to-transparent backdrop-blur p-5 border rounded-2xl hover:-translate-y-1 transition-all cursor-pointer`}
    >
      <div className="flex justify-between items-center">
        <span className={`text-lg text-${color}`}>{icon}</span>
        <span className="text-white/50 text-xs">
          <MdArrowOutward />
        </span>
      </div>
      <span className="font-black text-3xl">{value}</span>
      <span className="font-mono text-gray-500 text-sm">{name}</span>
    </div>
  );
}

export default StatCard;
