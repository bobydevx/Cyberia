import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import type { Cabin } from "../types/cabin";
import CabinCard from "../components/CabinCard";

function Cabinas() {
  const [cabinas, setCabinas] = useState<Cabin[]>([
    {
      id: 1,
      name: "Cabina Alpha - 01",
      price: 15,
      status: "available",
      graphic_card: "RTX 5090",
      image: "cabina_01.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
    {
      id: 2,
      name: "Cabina Beta - 02",
      price: 12,
      status: "maintenance",
      graphic_card: "RTX 5090",
      image: "cabina_02.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
    {
      id: 3,
      name: "Cabina Gamma - 03",
      price: 20,
      status: "reserve",
      graphic_card: "RTX 5090",
      image: "cabina_03.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
    {
      id: 4,
      name: "Cabina Delta - 04",
      price: 10,
      status: "available",
      graphic_card: "RTX 5090",
      image: "cabina_04.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
    {
      id: 5,
      name: "Cabina Epsilon - 05",
      price: 10,
      status: "available",
      graphic_card: "RTX 5090",
      image: "cabina_05.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
    {
      id: 6,
      name: "Cabina Eta - 06",
      price: 10,
      status: "available",
      graphic_card: "RTX 5090",
      image: "cabina_06.jpg",
      processor: "Intel i9-14900K",
      ram: "32 RAM",
    },
  ]);

  const [status, setStatus] = useState("all");

  const cabinasFiltradas = cabinas.filter((c) => {
    if (status === "" || status === "all") return true;

    return c.status === status;
  });
  return (
    <section className="bg-gray-950 p-8 w-full">
      <div className="space-y-2">
        <p className="font-mono text-blue-secondary uppercase">Explorar</p>
        <h1 className="font-outfit font-black text-4xl">
          Cabinas{" "}
          <span className="bg-clip-text bg-linear-to-b from-blue-secondary to-blue-primary text-transparent">
            disponibles
          </span>
        </h1>
      </div>

      <div className="flex items-center gap-2 mt-6 text-gray-500">
        <CiFilter />
        <button
          onClick={() => setStatus("")}
          className="px-2 border border-white/10 rounded-full font-mono uppercase cursor-pointer"
        >
          Todas
        </button>
        <button
          onClick={() => setStatus("available")}
          className="px-2 border border-white/10 rounded-full font-mono uppercase cursor-pointer"
        >
          Disponibles
        </button>
        <button
          onClick={() => setStatus("reserve")}
          className="px-2 border border-white/10 rounded-full font-mono uppercase cursor-pointer"
        >
          Reservadas
        </button>
        <button
          onClick={() => setStatus("maintenance")}
          className="px-2 border border-white/10 rounded-full font-mono uppercase cursor-pointer"
        >
          Mantenimiento
        </button>
      </div>

      {cabinasFiltradas && cabinasFiltradas.length >= 1 && (
        <div className="gap-4 grid grid-cols-4 mt-10">
          {cabinasFiltradas.map((cabina) => (
            <CabinCard key={cabina.id} {...cabina} show={true} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Cabinas;
