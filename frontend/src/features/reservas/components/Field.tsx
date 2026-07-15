function Field({
  value,
  icon,
}: {
  value?: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-gray-300">
      {icon}
      <span className="font-semibold">{value}</span>
    </div>
  );
}

export default Field;
