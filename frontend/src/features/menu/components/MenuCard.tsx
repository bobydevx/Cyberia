function MenuCard({ dish }) {
  const { image, name, ingredients = [], rating, id } = dish;
  return (
    <article className="bg-gray-900 hover:shadow-xl border-2 border-white/20 hover:border-2 hover:border-secondary/50 rounded-md overflow-hidden transition-all hover:-translate-y-1 duration-300">
      {/* Imagen */}
      <img src={image} alt="" className="rounded-t-md" />

      {/* Contenido */}
      <div className="p-4">
        <div className="flex justify-between items-center py-2">
          <h3 className="font-bold text-xl">{name}</h3>
          <span className="font-manrope font-extrabold text-secondary text-lg">
            {(rating * 2).toFixed(2)}€
          </span>
        </div>

        <p className="font-manrope text-[#cbd5e1] text-sm leading-relaxed">
          {ingredients.join(", ")}
        </p>
      </div>
    </article>
  );
}

export default MenuCard;
