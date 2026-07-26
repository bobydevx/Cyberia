interface Props {
  duration: number;
  onChange: (value: number) => void;
}

const durations = [1, 2, 4, 6, 8];

function DurationSelector({ duration, onChange }: Props) {
  return (
    <section className="bg-black/40 p-4 border border-white/10 rounded-md">
      <p className="my-6 font-jetbrain text-gray-500 uppercase">4. Duración</p>
      <div className="flex gap-4">
        {durations.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            className={
              duration === value
                ? "bg-blue-secondary text-black px-5 py-3 rounded"
                : "border border-white/20 px-5 py-3 rounded"
            }
          >
            {value}h
          </button>
        ))}
      </div>
    </section>
  );
}

export default DurationSelector;
