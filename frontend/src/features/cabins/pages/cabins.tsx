import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import type { Cabin } from "@/features/cabins/types/cabin";
import CabinCard from "@/features/cabins/components/CabinCard";

function Cabins() {
  const [cabins, setCabins] = useState<Cabin[]>([
    {
      id: 1,
      name: "Cabina Alpha - 01",
      price: 15,
      status: "available",
      graphic_card: "RTX 5090",
      image: "/img/cabina_01.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
    {
      id: 2,
      name: "Cabina Beta - 02",
      price: 12,
      status: "maintenance",
      graphic_card: "RTX 5090",
      image: "/img/cabina_02.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
    {
      id: 3,
      name: "Cabina Gamma - 03",
      price: 20,
      status: "reserve",
      graphic_card: "RTX 5090",
      image: "/img/cabina_03.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
    {
      id: 4,
      name: "Cabina Delta - 04",
      price: 10,
      status: "available",
      graphic_card: "RTX 5090",
      image: "/img/cabina_04.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
    {
      id: 5,
      name: "Cabina Epsilon - 05",
      price: 10,
      status: "available",
      graphic_card: "RTX 5090",
      image: "/img/cabina_05.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
    {
      id: 6,
      name: "Cabina Eta - 06",
      price: 10,
      status: "available",
      graphic_card: "RTX 5090",
      image: "/img/cabina_06.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
  ]);

  const [status, setStatus] = useState("all");

  const cabinsFiltered = cabins.filter((c) => {
    if (status === "" || status === "all") return true;

    return c.status === status;
  });

  const filters = [
    {
      label: "Todas",
      value: "all",
    },
    {
      label: "Disponibles",
      value: "available",
    },
    {
      label: "Reservadas",
      value: "reserve",
    },
    {
      label: "Mantenimiento",
      value: "maintenance",
    },
  ];

  return (
    <section className="bg-linear-to-b from-gray-950 via-[#111827] to-black px-12 py-10 w-full min-h-screen">
      <div className="space-y-2">
        <p className="font-mono text-secondary uppercase">Explorar</p>
        <h1 className="font-black text-4xl">
          Cabinas{" "}
          <span className="bg-clip-text bg-linear-to-b from-secondary to-primary text-transparent">
            disponibles
          </span>
        </h1>
      </div>

      <div className="flex items-center gap-2 mt-6 text-gray-500">
        <div className="flex justify-center items-center bg-white/5 border border-white/10 rounded-full w-11 h-11 text-gray-300 text-xl">
          <CiFilter />
        </div>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setStatus(filter.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer
              ${
                status === filter.value
                  ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {cabinsFiltered && cabinsFiltered.length >= 1 && (
        <div className="gap-4 grid grid-cols-4 mt-10">
          {cabinsFiltered.map((cabin) => (
            <CabinCard key={cabin.id} {...cabin} show={true} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Cabins;
