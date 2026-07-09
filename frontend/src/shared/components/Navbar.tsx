import { Link } from "react-router";
import { FiCoffee } from "react-icons/fi";

function NavBar() {
  return (
    <header className="container-app debug">
      <nav className="flex justify-between items-center mx-10 py-3">
        {/* Logo */}
        <Link to="/welcome" className="flex items-center gap-3">
          <span className="font-black text-blue-secondary text-2xl">
            <FiCoffee />
          </span>
          <span className="font-outfit font-black text-2xl">CYBERIA</span>
        </Link>

        {/* Menú  */}
        <ul className="flex gap-4 text-white/70">
          <li className="hover:text-white">
            <Link to="">Cabinas</Link>
          </li>
          <li className="hover:text-white">
            <Link to="">Juegos</Link>
          </li>
          <li className="hover:text-white">
            <Link to="">Menú</Link>
          </li>
          <li className="hover:text-white">
            <Link to="">FAQ</Link>
          </li>
        </ul>

        {/* Login Buttons */}
        <div className="flex items-center gap-4">
          <Link className="text-white/70 hover:text-white" to="/login">
            Ingresar
          </Link>

          <Link
            to="/register"
            className="bg-blue-secondary hover:bg-cyan-300 px-8 py-3 rounded-md font-manrope font-bold text-black text-sm uppercase cursor-pointer"
          >
            Crear Cuenta
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
