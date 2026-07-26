import GameCard from "@/features/games/components/GameCard";
import type { GameProps } from "@/features/games/types/game";
import { useEffect, useState } from "react";

function PopularGames() {
  const [games, setGames] = useState<GameProps[]>([
    { id: "", background_image: "", genres: [], name: "", rating: "" },
  ]);

  useEffect(() => {
    async function getGames() {
      const response = await fetch("https://jsonfakery.com/games/random/4");

      const json = await response.json();
      console.log(json);
      setGames(json);
    }

    getGames();
  }, []);

  return (
    <section id="game" className="m-12 container-app">
      <p className="font-jetbrain text-md text-orange-500 uppercase">
        Catálogo
      </p>

      <h2 className="my-6 font-semibold text-5xl">Juegos populares</h2>

      <div className="gap-8 grid grid-cols-4 mt-8">
        {games && games.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </section>
  );
}

export default PopularGames;
