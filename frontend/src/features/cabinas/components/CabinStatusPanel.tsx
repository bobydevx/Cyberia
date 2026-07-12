import { BsCpu } from "react-icons/bs";
import type { Cabin } from "../types/cabin";
import clsx from "clsx";

function CabinStatusPanel({ id, name, price, status }: Cabin) {
  return (
    <article className="flex justify-between items-center gap-6">
      <div className="flex gap-4">
        <span className="text-blue-secondary text-2xl">
          <BsCpu />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-manrope font-bold text-sm">{name}</span>
          <span className="font-jetbrain text-[#6b7280] text-sm">
            {price} € / hr
          </span>
        </div>
      </div>

      <button
        className={clsx(
          "px-4 py-2 border rounded-xs w-36",
          (status === "available" &&
            "border-green-primary text-green-primary bg-green-primary/20") ||
            (status === "reserve" &&
              "border-red-500 text-red-500 bg-red-500/20") ||
            (status === "maintenance" &&
              "border-orange-500 text-orange-500 bg-orange-500/20"),
        )}
      >
        {(status === "available" && "Disponible") ||
          (status === "reserve" && "Reservada") ||
          (status === "maintenance" && "Mantenimiento")}
      </button>
    </article>
  );
}

export default CabinStatusPanel;
