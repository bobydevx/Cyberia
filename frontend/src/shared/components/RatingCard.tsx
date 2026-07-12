import { FaStar } from "react-icons/fa";

function RatingCard({
  name,
  role,
  opinion,
}: {
  name: string;
  role: string;
  opinion: string;
}) {
  return (
    <article className="bg-gray-900 p-4 border border-white/20 rounded-md">
      {/* Rating star */}
      <div className="flex gap-1 text-blue-secondary text-xl">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      {/* Body */}
      <p className="mt-6 font-manrope text-gray-300 text-lg">"{opinion}"</p>

      {/* Bottom */}
      <div className="flex items-center gap-6 mt-4 pt-3 border-t border-t-gray-500">
        <span className="bg-gray-950 px-4 py-2 rounded-full font-black">
          {name.slice(0, 1)}
        </span>

        <div className="flex flex-col">
          <h3 className="font-bold text-lg">{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </article>
  );
}

export default RatingCard;
