import Button from "@/shared/components/Button";
import { useState } from "react";
import { BsActivity } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoTrophyOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { PiJoystickThin } from "react-icons/pi";
import { Link } from "react-router";

function Dashboard() {
  const [user, setUser] = useState({ username: "fk-user", rol: "sesión" });

  const [reservas, setReservas] = useState([
    {
      id: 0,
      usuario_id: 1,
      cabina_id: 1,
      fecha: "14/07/2026",
      hora_inicio: "19:10",
      hora_fin: "23:30",
      precio: 14,
    },
  ]);

  const [stats, setStats] = useState([
    {
      nombre: "Próximas Reservas",
      valor: reservas.length,
      icono: <CiCalendar />,
      color: "blue-secondary",
    },
    {
      nombre: "Reservas Totales",
      valor: reservas.length,
      icono: <IoTrophyOutline />,
      color: "pink-500",
    },
    {
      nombre: "Sesiones Activas",
      valor: 0,
      icono: <BsActivity />,
      color: "purple-500",
    },
    {
      nombre: "Total invertido",
      valor:
        reservas.reduce((total, reserva) => (total += reserva.precio), 0) + "€",
      icono: <HiOutlineLightningBolt />,
      color: "blue-secondary",
    },
  ]);

  return (
    <section className="bg-gray-950 p-8 w-full">
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
        {stats &&
          stats.map((stat) => (
            <div className="flex flex-col gap-2 bg-gray-800/65 p-3 border border-white/10 rounded-md">
              <div className="flex justify-between items-center">
                <span className={`text-lg text-${stat.color}`}>
                  {stat.icono}
                </span>
                <span className="text-white/50 text-xs">
                  <MdArrowOutward />
                </span>
              </div>
              <span className="font-black text-3xl">{stat.valor}</span>
              <span className="font-mono text-gray-500 text-sm">
                {stat.nombre}
              </span>
            </div>
          ))}

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
                <div className="space-x-5 p-3 border border-white/10 rounded-md">
                  <span className="font-bold">Cabina {reserva.cabina_id}</span>
                  <p>
                    Fecha: <span>{reserva.fecha}</span>{" "}
                  </p>
                  <p>
                    Horario:
                    {reserva.hora_inicio} - {reserva.hora_fin}
                  </p>
                  <p>Precio: {reserva.precio}€</p>
                </div>
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
