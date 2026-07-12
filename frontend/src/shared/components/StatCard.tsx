function StatCard({
  statValue,
  statDescripcion,
}: {
  statValue: string;
  statDescripcion: string;
}) {
  return (
    <div className="flex flex-col gap-2 bg-[#131a22]/65 pt-4 pl-8 border border-gray-500 rounded-xl w-44 h-24">
      <span className="font-bold text-blue-secondary text-2xl">
        {statValue}
      </span>
      <span className="text-gray-500 uppercase">{statDescripcion}</span>
    </div>
  );
}

export default StatCard;
