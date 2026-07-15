import type { MenuProps } from "@/features/welcome/types/menu";
import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";

function Menu() {
  const [menu, setMenu] = useState<MenuProps[]>([]);

  useEffect(() => {
    async function obtenerMenu() {
      const response = await fetch("https://dummyjson.com/recipes?limit=8");

      const json = await response.json();
      console.log(json);
      setMenu(json.recipes);
    }

    obtenerMenu();
  }, []);

  return (
    <section className="bg-linear-to-b from-gray-950 via-[#111827] to-black px-12 py-10 w-full min-h-screen">
      <div className="space-y-2">
        <p className="font-mono text-purple-500 uppercase">Cocina Gamer</p>
        <h1 className="font-outfit font-black text-4xl">
          Comidas &{" "}
          <span className="bg-clip-text bg-linear-to-b from-blue-secondary to-blue-primary text-transparent">
            Bebidas
          </span>
        </h1>
      </div>
      <div className="gap-4 grid grid-cols-4 mt-8">
        {menu.map((plato) => (
          <MenuCard key={plato.id} dish={plato} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
