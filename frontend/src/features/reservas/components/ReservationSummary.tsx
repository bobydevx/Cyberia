import type { Cabin } from "@/features/cabinas/types/cabin";
import FieldReservationCabin from "./FieldReservationCabin";
import { useMemo } from "react";

interface Props {
  cabin?: Cabin;
  date: Date;
  duration: number;
  startHour: Date | null;
}

function ReservationSummary({ cabin, date, duration, startHour }: Props) {
  if (!cabin) return null;

  const total = cabin.price * duration;

  const endHour = useMemo(() => {
    if (!startHour || duration === 0) {
      return null;
    }

    const end = new Date(startHour);
    end.setHours(end.getHours() + duration);

    return end;
  }, [startHour, duration]);

  const schedule = useMemo(() => {
    if (!startHour || !endHour) {
      return "--:--";
    }

    return `${startHour.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    })} - ${endHour.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }, [startHour, endHour]);

  return (
    <div className="col-span-1 bg-black/40 mt-20 p-4 border border-white/10 rounded-md h-fit">
      <p className="font-jetbrain text-blue-secondary uppercase">Resumen</p>

      <div className="my-6">
        <img
          src={cabin.image}
          className="my-6 rounded-lg w-full object-cover"
        />
      </div>

      <div>
        <div className="font-manrope font-black text-xl">{cabin.name}</div>
        <p className="text-gray-300 text-sm">
          {cabin.graphic_card} - {cabin.processor}
        </p>
      </div>

      <div className="space-y-3 my-8">
        <FieldReservationCabin
          field="Fecha"
          value={date.toLocaleString().split(",")[0]}
        />
        <FieldReservationCabin field="Horario" value={schedule} />
        <FieldReservationCabin field="Duracion" value={duration + "h"} />
        <FieldReservationCabin field="Precio" value={cabin.price + "€"} />
      </div>

      <div className="flex justify-between items-center py-4 border-t">
        <p className="text-gray-300 uppercase">Total</p>
        <p className="font-black text-blue-secondary text-3xl">{total}€</p>
      </div>

      <button
        type="submit"
        className="bg-blue-secondary mx-auto px-6 py-4 rounded-md w-full font-black text-black cursor-progress"
      >
        Confirmar Reserva
      </button>
    </div>
  );
}

export default ReservationSummary;
