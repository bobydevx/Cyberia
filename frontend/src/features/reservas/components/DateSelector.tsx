import clsx from "clsx";

interface Props {
  dates: Date[];
  selectedDate: Date;
  onChange: (date: Date) => void;
}

const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

function DateSelector({ dates, selectedDate, onChange }: Props) {
  const isSameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();

  return (
    <div className="bg-black/40 p-4 border border-white/10 rounded-md">
      <p className="my-6 font-jetbrain text-gray-500 uppercase">2. Fecha</p>

      <div className="flex gap-4 text-gray-300">
        {dates.map((date) => (
          <button
            type="button"
            key={date.toISOString()}
            onClick={() => onChange(date)}
            className={clsx(
              "px-8 py-6 border border-white/20 rounded-md text-gray-300 transition-all cursor-pointer",
              isSameDay(selectedDate, date)
                ? "bg-blue-secondary/20 border-blue-secondary"
                : "hover:border-blue-secondary/40",
            )}
          >
            <div className="flex flex-col items-center">
              <div className="flex gap-1">
                {/* Día de la semana (Lun - Dom) */}
                <span className="uppercase">{days[date.getDay()]},</span>
                {/* Numero de Día */}
                <span>{date.getDate()}</span>
              </div>
              <div>
                {/* Mes */}
                <span>
                  {date
                    .toLocaleString("es-ES", { month: "short" })
                    .toUpperCase()}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DateSelector;
