import ReservaCard from "@/features/reservas/components/ReservaCard";
import type { Reserva } from "@/features/reservas/types/reserva";
import Button from "@/shared/components/Button";
import { useState } from "react";
import { BsActivity } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoTrophyOutline } from "react-icons/io5";
import { PiJoystickThin } from "react-icons/pi";
import { Link } from "react-router";
import StatCard from "@/features/dashboard/components/StatCard";

function Dashboard() {
  const [user, setUser] = useState({ username: "fk-user", rol: "sesión" });

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
  ]);

  const [stats, setStats] = useState([
    {
      nombre: "Próximas Reservas",
      valor: reservas.length,
      icono: <CiCalendar />,
      color:
        "text-blue-secondary shadow-blue-secondary/30 from-blue-secondary/10 border-blue-secondary/20",
    },
    {
      nombre: "Reservas Totales",
      valor: reservas.length,
      icono: <IoTrophyOutline />,
      color:
        "text-pink-500 shadow-pink-500/30 from-pink-500/10 border-pink-500/20",
    },
    {
      nombre: "Sesiones Activas",
      valor: 0,
      icono: <BsActivity />,
      color:
        "text-purple-500 shadow-purple-500/30 from-purple-500/10 border-purple-500/20",
    },
    {
      nombre: "Total invertido",
      valor:
        reservas.reduce((total, reserva) => (total += reserva.price), 0) + "€",
      icono: <HiOutlineLightningBolt />,
      color:
        "text-blue-secondary shadow-blue-secondary/30 from-blue-secondary/10 border-blue-secondary/20",
    },
  ]);

  return (
    <section className="bg-linear-to-b from-gray-950 via-[#111827] to-black px-12 py-10 w-full min-h-screen">
      <div className="space-y-2">
        <p className="font-mono text-blue-secondary uppercase">Dashboard</p>
        <h1 className="font-outfit font-black text-4xl">
          Hola,{" "}
          <span className="bg-clip-text bg-linear-to-b from-blue-secondary to-blue-primary text-transparent">
            {user.username}
          </span>
        </h1>
        <p className="text-gray-400 text-md">Resumen de tu actividad gamer.</p>
      </div>

      <section className="gap-4 grid grid-cols-4 mx-2 mt-6">
        {/* Stats */}
        {stats && stats.map((stat) => <StatCard {...stat} />)}

        <div className="col-span-3 bg-gray-900 mt-6 border border-white/10 rounded-md">
          <div className="flex justify-between items-center mx-6 p-6">
            <p className="font-bold text-lg">Próximas sesiones</p>
            <Link
              to="mis-reservas"
              className="hover:border-b font-mono font-bold text-blue-secondary text-sm uppercase"
            >
              Ver Todas
            </Link>
          </div>

          {reservas && reservas.length >= 1 ? (
            <div className="mx-6">
              {reservas.map((reserva) => (
                <ReservaCard {...reserva} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-4 my-auto h-full max-h-62">
              <span className="text-gray-400 text-5xl">
                <PiJoystickThin />
              </span>
              <p className="text-gray-400">Sin reservas próximas</p>
              <Button text="Reservar Ahora" />
            </div>
          )}
        </div>
        <div className="col-span-1 bg-gray-900 mt-6 p-3 border border-white/10 rounded-md">
          <p className="font-bold text-xl">Acciones rápidas</p>

          <div className="space-y-4 mt-4">
            <Link
              to="cabinas"
              className="block space-y-2 bg-gray-900 p-4 border border-white/10 rounded-md"
            >
              <div className="flex items-center gap-2 font-bold text-blue-secondary text-xs uppercase">
                <IoIosArrowRoundForward />
                Reservar
              </div>
              <p className="font-manrope font-bold">Explorar cabinas</p>
            </Link>

            <Link
              to="juegos"
              className="block space-y-2 bg-gray-900 p-4 border border-white/10 rounded-md"
            >
              <div className="flex items-center gap-2 font-bold text-pink-500 text-xs uppercase">
                <IoIosArrowRoundForward />
                Catálogo
              </div>
              <p className="font-bold">Ver juegos</p>
            </Link>

            <Link
              to="menu"
              className="block space-y-2 bg-gray-900 p-4 border border-white/10 rounded-md"
            >
              <div className="flex items-center gap-2 font-bold text-purple-500 text-xs uppercase">
                <IoIosArrowRoundForward />
                Cocina
              </div>
              <p className="font-bold">Comida y bebidas</p>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
