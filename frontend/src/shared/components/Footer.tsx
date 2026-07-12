import { FiCoffee } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { LiaChrome } from "react-icons/lia";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router";

function Footer() {
  const devLink = [
    {
      icon: <TiSocialLinkedin />,
      text: "bobynosa",
      href: "https://www.linkedin.com/in/bobynosa/",
    },
    {
      icon: <IoMailOutline />,
      text: "bobynosa8@gmail.com",
      href: "mailto:bobynosa8@gmail.com",
    },
    {
      icon: <LiaChrome />,
      text: "portfolio",
      href: "https://bobydev.vercel.app/",
    },
  ];
  return (
    <footer className="mx-auto px-8 py-6 border-t border-t-white/10 w-350">
      <div className="grid grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-blue-secondary">
              <FiCoffee />
            </span>
            <p className="font-outfit font-black">CYBERIA</p>
          </div>
          <p className="mt-6 font-manrope text-gray-300 text-sm leading-relaxed">
            Cabinas esports premium. Reserva, conéctate, conquista.
          </p>
        </div>
        <div>
          <p className="font-jetbrain text-blue-secondary text-md uppercase">
            Producto
          </p>
          <ul className="mt-2 text-gray-300">
            <li>
              <Link to="/welcome#cabin" className="hover:text-white">
                Cabinas
              </Link>
            </li>
            <li>
              <Link to="/welcome#game" className="hover:text-white">
                Juegos
              </Link>
            </li>
            <li>
              <Link to="/welcome#menu" className="hover:text-white">
                Menú
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-jetbrain text-md text-red-500 uppercase">
            Compañia
          </p>

          <div className="mt-2 text-gray-300">
            <p className="hover:text-white">Sobre nosotros</p>
            <p className="hover:text-white">Eventos</p>
            <p className="hover:text-white">Comunidad</p>
          </div>
        </div>
        <div>
          <p className="mb-2 font-jetbrain text-md text-purple-500 uppercase">
            Desarrollador
          </p>

          {devLink.map((link) => (
            <a
              href={link.href}
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <span className="text-lg">{link.icon}</span>
              <span className="">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
