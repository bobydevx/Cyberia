import { useEffect, useState } from "react";
import type { GameProps } from "@/features/juegos/types/game";
import GameCard from "@/features/juegos/components/GameCard";

function Juegos() {
  const [games, setGames] = useState<GameProps[]>([
    { id: "", background_image: "", genres: [], name: "", rating: "" },
  ]);

  useEffect(() => {
    async function obtenerJuegos() {
      const response = await fetch("https://jsonfakery.com/games/random/8");

      const json = await response.json();
      console.log(json);
      setGames(json);
    }

    obtenerJuegos();
  }, []);

  return (
    <section className="bg-linear-to-b from-gray-950 via-[#111827] to-black px-12 py-10 w-full min-h-screen">
      <div className="space-y-2">
        <p className="font-mono text-pink-500 uppercase">Catalogo</p>
        <h1 className="font-outfit font-black text-4xl">
          Juegos{" "}
          <span className="bg-clip-text bg-linear-to-b from-blue-secondary to-blue-primary text-transparent">
            disponibles
          </span>
        </h1>
        <p className="text-gray-400 text-md">
          Todos preinstalados con licencias activas.
        </p>
      </div>
      <div className="gap-4 grid grid-cols-4 mt-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default Juegos;
