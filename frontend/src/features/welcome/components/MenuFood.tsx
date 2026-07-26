import MenuCard from "@/features/menu/components/MenuCard";
import type { MenuProps } from "@/features/menu/types/menu";
import { useEffect, useState } from "react";

function MenuFood() {
  const [menu, setMenu] = useState<MenuProps[]>([]);
  // Menu

  useEffect(() => {
    async function getMenu() {
      const response = await fetch("https://dummyjson.com/recipes?limit=4");

      const json = await response.json();
      setMenu(json.recipes);
    }

    getMenu();
  }, []);

  return (
    <section id="menu" className="m-12 container-app">
      <p className="font-jetbrain text-md text-purple-500 uppercase">Menú</p>

      <h2 className="my-6 font-semibold text-5xl">Comida & Bebidas</h2>

      <div className="gap-8 grid grid-cols-4 mt-8">
        {menu && menu.map((dish) => <MenuCard key={dish.id} dish={dish} />)}
      </div>
    </section>
  );
}

export default MenuFood;
