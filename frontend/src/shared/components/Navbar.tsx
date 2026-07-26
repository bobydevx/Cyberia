import { Link } from "react-router";
import { FiCoffee } from "react-icons/fi";
import { useState } from "react";

function NavBar() {
  const [linkNav] = useState([
    {
      id: "cabins",
      name: "Cabinas",
      href: "",
    },
    {
      id: "games",
      name: "Juegos",
      href: "",
    },
    {
      id: "menu",
      name: "Menú",
      href: "",
    },
    {
      id: "faq",
      name: "FAQ",
      href: "",
    },
  ]);
  return (
    <header className="container-app">
      <nav className="flex justify-between items-center mx-10 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="font-black text-secondary text-2xl">
            <FiCoffee />
          </span>
          <span className="font-black text-2xl">CYBERIA</span>
        </Link>

        {/* Menú  */}
        <ul className="flex gap-4 text-white/70">
          {linkNav.map((link) => (
            <li className="hover:text-white">
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Login Buttons */}
        <div className="flex items-center gap-4">
          <Link className="text-white/70 hover:text-white" to="/login">
            Ingresar
          </Link>

          <Link
            to="/register"
            className="bg-secondary hover:bg-cyan-300 px-8 py-3 rounded-md font-manrope font-bold text-black text-sm uppercase cursor-pointer"
          >
            Crear Cuenta
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
