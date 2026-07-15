import Button from "@/shared/components/Button";
import { useMemo, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { PiJoystickThin } from "react-icons/pi";
import type { Reserva } from "../types/reserva";
import ReservaCard from "../components/ReservaCard";

function MisReservas() {
  const [reservas, setReservas] = useState<Reserva[]>([
    {
      id: 0,
      user_id: 1,
      cabin_id: 1,
      date: "14/07/2026",
      start_time: "19:10",
      end_time: "23:30",
      price: 14,
      status: "reserved",
    },
    {
      id: 1,
      user_id: 1,
      cabin_id: 1,
      date: "15/07/2026",
      start_time: "19:10",
      end_time: "23:30",
      price: 14,
      status: "cancelled",
    },
    {
      id: 2,
      user_id: 1,
      cabin_id: 1,
      date: "16/07/2026",
      start_time: "19:10",
      end_time: "23:30",
      price: 14,
      status: "outdated",
    },
  ]);

  const [status, setStatus] = useState("all");

  const filters = [
    {
      label: "Todas",
      value: "all",
    },
    {
      label: "Activas",
      value: "reserved",
    },
    {
      label: "Pasadas",
      value: "outdated",
    },
    {
      label: "Canceladas",
      value: "cancelled",
    },
  ];

  const reservasFiltradas = reservas.filter((r) => {
    if (status === "all") return true;

    return r.status === status;
  });

  const stats = useMemo(
    () => ({
      total: reservas.length,
      activas: reservas.filter((r) => r.status === "reserved").length,
      pasadas: reservas.filter((r) => r.status === "outdated").length,
      canceladas: reservas.filter((r) => r.status === "cancelled").length,
    }),
    [reservas],
  );

  return (
    <section className="bg-linear-to-b from-gray-950 via-[#111827] to-black px-12 py-10 w-full min-h-screen">
      {/* HEADER */}
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-6">
        <div>
          <p className="font-mono text-blue-secondary text-xs uppercase tracking-[0.3em]">
            Mi historial
          </p>

          <h1 className="mt-2 font-outfit font-black text-white text-5xl">
            Mis{" "}
            <span className="bg-clip-text bg-linear-to-r from-blue-secondary to-blue-primary text-transparent">
              Reservas
            </span>
          </h1>

          <p className="mt-3 max-w-xl text-gray-400">
            Consulta tus reservas, revisa el historial y gestiona las próximas
            sesiones desde un único lugar.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md px-8 py-6 border border-white/10 rounded-2xl w-3xs">
          <p className="text-gray-400 text-sm">Reservas totales</p>

          <h2 className="mt-2 font-black text-white text-4xl">{stats.total}</h2>
        </div>
      </div>

      {/* STATS */}
      <div className="gap-5 grid md:grid-cols-3 mt-10">
        <div className="bg-linear-to-br from-green-500/10 to-transparent backdrop-blur p-5 border border-green-500/20 rounded-2xl">
          <p className="text-gray-400 text-sm">Activas</p>

          <h3 className="mt-2 font-bold text-green-400 text-3xl">
            {stats.activas}
          </h3>
        </div>

        <div className="bg-linear-to-br from-yellow-500/10 to-transparent backdrop-blur p-5 border border-yellow-500/20 rounded-2xl">
          <p className="text-gray-400 text-sm">Pasadas</p>

          <h3 className="mt-2 font-bold text-yellow-400 text-3xl">
            {stats.pasadas}
          </h3>
        </div>

        <div className="bg-linear-to-br from-red-500/10 to-transparent backdrop-blur p-5 border border-red-500/20 rounded-2xl">
          <p className="text-gray-400 text-sm">Canceladas</p>

          <h3 className="mt-2 font-bold text-red-400 text-3xl">
            {stats.canceladas}
          </h3>
        </div>
      </div>

      {/* FILTROS */}
      <div className="flex flex-wrap items-center gap-3 mt-10">
        <div className="flex justify-center items-center bg-white/5 border border-white/10 rounded-full w-11 h-11 text-gray-300 text-xl">
          <CiFilter />
        </div>

        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setStatus(filter.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer
              ${
                status === filter.value
                  ? "bg-blue-secondary text-white shadow-lg shadow-blue-secondary/30"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* LISTA */}
      {reservasFiltradas.length > 0 ? (
        <div className="gap-6 grid mt-10">
          {reservasFiltradas.map((reserva) => (
            <div
              key={reserva.id}
              className="hover:scale-[1.01] transition-all hover:-translate-y-1 duration-300"
            >
              <ReservaCard {...reserva} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center bg-white/5 backdrop-blur-md mx-auto mt-20 px-8 py-14 border border-white/10 rounded-3xl w-full">
          <div className="flex justify-center items-center bg-blue-secondary/10 rounded-full w-24 h-24 text-blue-secondary text-6xl">
            <PiJoystickThin />
          </div>

          <h2 className="mt-8 font-bold text-white text-2xl">
            No hay reservas
          </h2>

          <p className="mt-3 max-w-md text-gray-400 text-center">
            No se encontraron reservas para este filtro. Reserva una cabina para
            empezar una nueva experiencia.
          </p>

          <div className="mt-8">
            <Button text="Reservar ahora" />
          </div>
        </div>
      )}
    </section>
  );
}

export default MisReservas;
