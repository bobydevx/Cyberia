import { useState } from "react";
import { PiMedalThin } from "react-icons/pi";

function GameCard({ game }) {
  const { id, background_image, name, rating, genres = [] } = game;

  const [randomRating] = useState(() => (Math.random() + 4).toFixed(1));

  return (
    <article className="relative hover:shadow-xl border-2 border-white/20 hover:border-2 hover:border-blue-secondary/50 rounded-md min-h-120 overflow-hidden transition-all hover:-translate-y-1 duration-300">
      <div className="absolute inset-0 bg-black/10"></div>
      <img
        src={background_image}
        alt=""
        className="rounded-md h-full object-cover"
      />

      <div className="bottom-4 left-4 absolute">
        <span className="font-jetbrain text-blue-secondary/70 text-sm uppercase">
          {genres[0]?.name || "Variado"}
        </span>
        <h3 className="pt-1 font-outfit font-bold text-md text-white">
          {name}
        </h3>
      </div>

      <div className="top-4 right-2 absolute flex items-center gap-2 bg-gray-900/75 px-4 py-2 rounded-md w-fit">
        <span className="text-pink-600 text-xl">
          <PiMedalThin />
        </span>
        <span className="font-semibold">{rating || randomRating}</span>
      </div>
    </article>
  );
}

export default GameCard;
