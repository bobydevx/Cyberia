import type { Cabin } from "@/features/cabinas/types/cabin";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
import { mockCabins } from "../data/cabins.mock";
import ReservationSummary from "../components/ReservationSummary";
import CabinSelector from "../components/CabinSelector";
import DateSelector from "../components/DateSelector";
import HourSelector from "../components/HourSelector";
import type { CabinReservation } from "../types/cabinreservation";
import DurationSelector from "../components/DurationSelector";

function CabinBooking() {
  const [cabins] = useState<Cabin[]>(mockCabins);

  const { id } = useParams();
  const today = useMemo(() => new Date(), []);

  const [reservation, setReservation] = useState<CabinReservation>({
    cabin_id: Number(id) || null,
    date: today,
    start_hour: null,
    end_hour: null,
    duration: 0,
  });

  const cabin = useMemo(
    () => cabins.find((c) => c.id === reservation.cabin_id),
    [cabins, reservation.cabin_id],
  );

  const total = useMemo(() => {
    if (!cabin) return 0;

    return cabin.price * reservation.duration;
  }, [cabin, reservation.duration]);

  const availableDates = useMemo(() => {
    return Array.from({ length: 6 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);
      return date;
    });
  }, [today]);

  const availableHours = useMemo(() => {
    return Array.from({ length: 16 }, (_, index) => {
      const hour = new Date();
      hour.setHours(8 + index, 0, 0, 0);
      return hour;
    });
  }, []);

  const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
  }

  const updateReservation = (key, value) => {
    setReservation((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="bg-linear-to-b from-gray-950 via-[#111827] to-black px-12 py-10 w-full min-h-screen">
      <div className="space-y-2">
        <p className="font-mono text-blue-secondary uppercase">Dashboard</p>
        <h1 className="font-outfit font-black text-4xl">
          Configura tu{" "}
          <span className="bg-clip-text bg-linear-to-b from-blue-secondary to-blue-primary text-transparent">
            sesión
          </span>
        </h1>
      </div>

      <article className="gap-4 grid grid-cols-3">
        {/* PANEL RESERVA */}
        <form onSubmit={handleSubmit} className="space-y-8 col-span-2 mt-12">
          {/* 01 - Elegir Cabina */}
          <CabinSelector
            cabins={cabins}
            selectedCabin={reservation.cabin_id}
            onChange={(id) => updateReservation("cabin_id", id)}
          />
          {/* 02- Fecha */}
          <DateSelector
            dates={availableDates}
            selectedDate={reservation.date}
            onChange={(date) => updateReservation("date", date)}
          />

          {/* 03 - Hora de inicio */}
          <HourSelector
            hours={availableHours}
            selectedHour={reservation.start_hour}
            onChange={(hour) => updateReservation("start_hour", hour)}
          />

          {/* 4. Duración */}
          <DurationSelector
            duration={reservation.duration}
            onChange={(value) => updateReservation("duration", value)}
          />
        </form>
        {/* RESUMEN */}
        <ReservationSummary
          cabin={cabin}
          date={reservation.date}
          duration={reservation.duration}
          startHour={reservation.start_hour}
        />
      </article>
    </section>
  );
}

export default CabinBooking;
