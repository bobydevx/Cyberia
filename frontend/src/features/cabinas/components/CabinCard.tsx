import { GoCpu } from "react-icons/go";
import type { Cabin } from "../types/cabin";
import { CiStar } from "react-icons/ci";
import { BsLightningCharge } from "react-icons/bs";
import clsx from "clsx";

function CabinCard({
  id,
  name,
  price,
  status,
  graphic_card,
  processor,
  ram,
  image,
}: Cabin) {
  // Componentes PC

  const specs = [
    {
      icon: <GoCpu />,
      color: "text-blue-secondary",
      value: processor,
    },
    {
      icon: <CiStar />,
      color: "text-purple-400",
      value: graphic_card,
    },
    {
      icon: <BsLightningCharge />,
      color: "text-red-500",
      value: ram,
    },
  ];

  // Estado cabina

  const statusConfig = {
    available: {
      label: "Disponible",
      className: "bg-green-primary/10 text-green-primary",
    },
    reserve: {
      label: "Reservada",
      className: "bg-red-500/20 text-red-500",
    },
    maintenance: {
      label: "Mantenimiento",
      className: "bg-orange-500/20 text-orange-500",
    },
  };

  const currentStatus = statusConfig[status];

  console.log(status);

  return (
    <div key={id} className="border border-white/20">
      {/* Top */}
      <div className="relative w-full aspect-4/3">
        <img
          src={"src/assets/img/" + image}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent"></div>
        <span
          className={clsx(
            "top-4 right-4 absolute px-4 py-1 rounded-full text-sm text-center uppercase",
            currentStatus.className,
          )}
        >
          {currentStatus.label}
        </span>
      </div>
      {/* Bottom */}
      <div className="space-y-5 bg-[#131a22] p-5">
        <div className="flex justify-between">
          <h2 className="font-outfit font-bold text-xl">{name}</h2>

          <div className="flex flex-col items-center">
            <span className="font-black text-blue-secondary text-2xl">
              {price} €
            </span>
            <span className="text-gray-400 text-xs tracking-widest">/HORA</span>
          </div>
        </div>
        <hr className="my-5 border-white/10" />
        <div className="flex flex-col gap-3">
          {specs.map((spec) => (
            <div
              key={spec.value}
              className="flex items-center gap-4 bg-white/5 p-2 rounded-lg"
            >
              <span className={`${spec.color} text-xl`}>{spec.icon}</span>

              <span>{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
