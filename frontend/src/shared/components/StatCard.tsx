function StatCard({
  statValue,
  statDescripction,
}: {
  statValue: string;
  statDescripction: string;
}) {
  return (
    <div className="flex flex-col gap-2 bg-background/65 pt-4 pl-8 border border-gray-500 rounded-xl w-44 h-24">
      <span className="font-bold text-secondary text-2xl">{statValue}</span>
      <span className="text-gray-500 uppercase">{statDescripction}</span>
    </div>
  );
}

export default StatCard;
