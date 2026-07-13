import Button from "@/shared/components/Button";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiEyeSlashThin, PiEyeThin } from "react-icons/pi";
import { Link } from "react-router";

function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    repeat_password: "",
  });

  const [isRevelingPassword, setIsRevelingPassword] = useState(false);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (!user.username || !user.password) {
      console.error("El username y la contraseña no puede estar vacios.");
      return;
    }
    // TODO: Ejecutar POST api
  }

  return (
    <section className="bg-gray-900 mx-auto my-8 py-4 w-3xl h-fit">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 my-8 ml-12">
          <p className="font-jetbrain font-bold text-md text-pink-500 uppercase">
            Crear Cuenta
          </p>
          <h3 className="font-outfit font-bold text-3xl">Únete a Cyberia</h3>
          <p className="text-white/70">
            El club gamer más exclusivo me espera.{" "}
          </p>
        </div>
        {/* Campos Formulario */}
        <div className="flex flex-col gap-6 ml-12">
          {/* Username */}
          <div className="flex flex-col gap-4">
            <label
              className="font-jetbrain text-blue-secondary uppercase"
              htmlFor="username"
            >
              Username
            </label>
            <input
              value={user.username}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, username: e.target.value }))
              }
              type="text"
              className="px-4 py-2 border border-white/20 rounded-xs w-3/4"
              id="username"
            />
          </div>
          {/* Password */}
          <div className="relative flex flex-col gap-4 w-3/4">
            <label
              htmlFor="password"
              className="font-jetbrain text-blue-secondary text-md uppercase"
            >
              Contraseña
            </label>
            <input
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
              type={isRevelingPassword ? "text" : "password"}
              id="password"
              className="px-4 py-2 border border-white/20 rounded-xs"
            />

            <button
              onClick={() => setIsRevelingPassword((prev) => !prev)}
              className="right-2 bottom-2 absolute text-xl cursor-pointer"
            >
              {isRevelingPassword ? <PiEyeSlashThin /> : <PiEyeThin />}
            </button>
          </div>
          {/* Repetir password */}
          <div className="relative flex flex-col gap-4 w-3/4">
            <label
              htmlFor="repeat_password"
              className="font-jetbrain text-blue-secondary text-md uppercase"
            >
              Repetir Contraseña
            </label>
            <input
              value={user.repeat_password}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  repeat_password: e.target.value,
                }))
              }
              type={isRevelingPassword ? "text" : "password"}
              id="repeat_password"
              className="px-4 py-2 border border-white/20 rounded-xs"
            />

            <button
              onClick={() => setIsRevelingPassword((prev) => !prev)}
              className="right-2 bottom-2 absolute text-xl cursor-pointer"
            >
              {isRevelingPassword ? <PiEyeSlashThin /> : <PiEyeThin />}
            </button>
          </div>
          {/*  */}
          <div className="flex items-center gap-2 text-gray-500">
            <input type="checkbox" className="size-3" id="keep_login" />
            <label htmlFor="keep_login">Mantener sesión iniciada</label>
          </div>
        </div>
        {/* Requisitos contraseña */}
        <div className="my-6 ml-12 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <span className="block border border-white/10 rounded-full size-3"></span>
            <span>Minimo 8 caracteres</span>
          </div>{" "}
          <div className="flex items-center gap-2">
            <span className="block border border-white/10 rounded-full size-3"></span>
            <span>Una mayúscula</span>
          </div>{" "}
          <div className="flex items-center gap-2">
            <span className="block border border-white/10 rounded-full size-3"></span>
            <span>Un número</span>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col items-center gap-4 mt-6">
          <Button icon={<IoIosArrowForward />} text="Crear cuenta" />
          <p>
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-blue-secondary">
              Inicia Sesión
            </Link>
          </p>
        </div>
      </form>
      {/* Demo */}
      <div className="bg-gray-950/20 mx-auto my-12 p-6 border border-white/10 rounded-md w-2/4">
        <p className="font-jetbrain font-semibold text-blue-secondary">Demo:</p>

        <div>
          <div className="flex flex-col gap-1 my-4 text-gray-400">
            <p>
              user: <span>Demo123</span> / <span>Demo123!</span>
            </p>
            <p>
              admin: <span>Admin123</span> / <span>Admin123!</span>
            </p>
          </div>
          <button className="flex items-center gap-2 bg-blue-secondary mx-auto mt-8 px-4 py-2 rounded-md font-bold text-black">
            <span>Entrar con demo</span>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Register;
