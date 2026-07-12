import clsx from "clsx";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { TbMinus } from "react-icons/tb";

function FAQCard({
  question,
  answer,
  isOpen,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
}) {
  const [isOpenToggle, setIsOpen] = useState<boolean>(isOpen);

  return (
    <div
      className={clsx(
        "relative bg-gray-900/65 py-5 pr-16 pl-12 border border-white/10 transition-all duration-300 roundedlgl",
        isOpenToggle ? "min-h-28" : "min-h-20",
      )}
    >
      <div className="flex flex-col justify-center gap-3 h-full">
        <h3 className="font-bold text-lg">{question}</h3>
        {isOpenToggle && <p className="text-gray-300">{answer}</p>}{" "}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpenToggle}
        aria-label={isOpenToggle ? "Cerrar respuesta" : "Abrir respuesta"}
        className="top-4 right-4 absolute text-blue-secondary text-2xl hover:scale-110 transition-transform cursor-pointer"
      >
        {isOpenToggle ? <TbMinus /> : <GoPlus />}
      </button>
    </div>
  );
}

export default FAQCard;
