import clsx from "clsx";
import type { Reserva } from "../types/reserva";
import Field from "./Field";
import { PiGameControllerThin } from "react-icons/pi";
import { GoCalendar } from "react-icons/go";
import { CiClock2, CiMonitor } from "react-icons/ci";
import { MdEuroSymbol } from "react-icons/md";

function ReservaCard({
  user_id,
  cabin_id,
  date,
  start_time,
  end_time,
  price,
  status,
}: Reserva) {
  const statusConfig = {
    reserved: {
      label: "Reservada",
      color: "bg-green-500/15 text-green-400 border-green-500/30",
      border: "before:bg-green-500",
    },
    cancelled: {
      label: "Cancelada",
      color: "bg-red-500/15 text-red-400 border-red-500/30",
      border: "before:bg-red-500",
    },
    outdated: {
      label: "Pasada",
      color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
      border: "before:bg-yellow-500",
    },
  };

  const currentStatus = statusConfig[status];

  const formattedPrice = new Intl.NumberFormat("es-Es", {
    style: "currency",
    currency: "EUR",
  }).format(price);

  return (
    <article
      className={clsx(
        "relative border border-white/10 rounded-2xl overflow-hidden",
        "bg-linear-to-br from-slate-900 to-gray-950",
        "shadow-lg shadow-blue-500/10",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/20",
        "before:absolute before:top-0 before:left-0 before:h-1 before:w-full",
        currentStatus.border,
      )}
    >
      {" "}
      <div className="p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6 pb-4 border-white/10 border-b">
          <div className="flex items-center gap-2">
            {" "}
            <PiGameControllerThin size={24} />
            <h3 className="font-bold text-lg uppercase tracking-wide">
              Cyberia Gaming Hub
            </h3>
          </div>
          <p className="text-gray-400 text-sm">Reserva de cabina</p>
        </header>
        {/* Contenido */}
        <div className="gap-2 grid grid-cols-2 my-4">
          <Field
            icon={<GoCalendar size={18} className="text-cyan-400" />}
            value={date}
          />
          <Field
            icon={<CiMonitor size={18} className="text-cyan-400" />}
            value={
              <span className="bg-cyan-500/10 px-2 py-1 rounded-md font-semibold text-cyan-300">
                Cabina {cabin_id}
              </span>
            }
          />
          <Field
            icon={<CiClock2 size={18} className="text-cyan-400" />}
            value={`${start_time}  -  ${end_time}`}
          />
          <Field
            icon={<MdEuroSymbol size={18} className="text-cyan-400" />}
            value={
              <span className="text-blue-secondary text-xl">
                {formattedPrice}
              </span>
            }
          />
        </div>
      </div>
    </article>
  );
}

export default ReservaCard;
