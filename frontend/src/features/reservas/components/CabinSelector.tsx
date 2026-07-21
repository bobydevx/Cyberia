import type { Cabin } from "@/features/cabinas/types/cabin";
import clsx from "clsx";

interface Props {
  cabins: Cabin[];
  selectedCabin: number | null;
  onChange: (id: number) => void;
}

function CabinSelector({ cabins, selectedCabin, onChange }: Props) {
  return (
    <section className="bg-black/40 p-4 border border-white/10 rounded-md">
      <p className="my-6 font-jetbrain text-gray-500 uppercase">
        1. Elige tu cabina
      </p>

      <div className="gap-4 grid grid-cols-2">
        {cabins &&
          cabins.map((cabin) => (
            <button
              key={cabin.id}
              type="button"
              onClick={() => onChange(cabin.id)}
              disabled={cabin.status !== "available"}
              className={clsx(
                "p-4 border rounded-md text-left transition-all",
                cabin.status !== "available" && "opacity-40 cursor-not-allowed",
                selectedCabin === cabin.id &&
                  "bg-blue-secondary/20 border-blue-secondary",
              )}
            >
              <div className="flex justify-between font-black">
                <p>{cabin.name}</p>
                <p className="text-blue-secondary text-xl">{cabin.price}€</p>
              </div>
              <div className="text-gray-400">
                {cabin.graphic_card} · {cabin.processor}
              </div>
            </button>
          ))}
      </div>
    </section>
  );
}

export default CabinSelector;
