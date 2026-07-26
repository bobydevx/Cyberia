import { useState } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { FiCoffee } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiGameControllerThin, PiJoystickLight } from "react-icons/pi";
import { Link } from "react-router";

function Leftbar() {
  const [user, setUser] = useState({ username: "fk-user", rol: "sesión" });

  const [linkNav] = useState([
    {
      id: "dashboard",
      name: "Dashboard",
      href: "/dashboard",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      id: "cabins",
      name: "Cabinas",
      href: "/cabinas",
      icon: <PiJoystickLight />,
    },
    {
      id: "reservations",
      name: "Mis Reservas",
      href: "/mis-reservas",
      icon: <GoCalendar />,
    },
    {
      id: "games",
      name: "Juegos",
      href: "/juegos",
      icon: <PiGameControllerThin />,
    },
    {
      id: "menu",
      name: "Menú",
      href: "/menu",
      icon: <CiForkAndKnife />,
    },
  ]);
  return (
    <aside className="top-0 sticky bg-gray-950/85 border-r border-r-white/10 h-screen">
      {/* Logo  */}
      <div className="p-6 border-b border-b-white/10">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-black text-secondary text-2xl">
            <FiCoffee />
          </span>
          <span className="font-black text-lg">CYBERIA</span>
        </Link>
        <p className="mt-2 font-jetbrain text-text-secondary text-sm">
          Gaming HUB
        </p>
      </div>
      {/*  */}

      <nav className="flex-1 space-y-1 p-4">
        <ul>
          {linkNav &&
            linkNav.map((link) => (
              <li>
                <Link
                  to={link.href}
                  className="flex items-center gap-3 hover:bg-white/5 px-3 py-2.5 rounded-lg text-gray-400"
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      <div className="bottom-0 absolute w-full">
        <div className="flex flex-col gap-0 p-4 border-white/10 border-t">
          <p className="font-mono text-gray-500 text-xs uppercase tracking-wider">
            {user.rol}
          </p>
          <p className="font-semibold text-sm truncate">{user.username}</p>
        </div>
        <div className="p-2 font-mono text-xs">
          <button className="flex items-center gap-2 hover:bg-white/5 px-4 py-2 text-gray-500 uppercase cursor-pointer">
            <IoExitOutline />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Leftbar;
