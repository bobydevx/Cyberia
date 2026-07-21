import clsx from "clsx";

interface Props {
  hours: Date[];
  selectedHour: Date | null;
  onChange: (hour: Date) => void;
}

function HourSelector({ hours, selectedHour, onChange }: Props) {
  return (
    <div className="bg-black/40 p-4 border border-white/10 rounded-md">
      <p className="my-6 font-jetbrain text-gray-500 uppercase">
        3. Hora de inicio
      </p>

      <div>
        <div className="flex flex-wrap gap-4 text-gray-300">
          {hours &&
            hours.map((hour) => (
              <button
                type="button"
                key={hour.toISOString()}
                onClick={() => onChange(hour)}
                className={clsx(
                  "px-5 py-3.5 border rounded-md",
                  selectedHour?.getTime() === hour.getTime()
                    ? "bg-blue-secondary text-black"
                    : "border-white/30",
                )}
              >
                {hour.toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HourSelector;
