import type { BotonProps } from "../../features/welcome/types/button";

function OutlineButton({ text, icon }: BotonProps) {
  return (
    <button className="flex items-center gap-1 px-8 py-4 rounded-lg outline outline-blue-secondary font-bold text-blue-secondary uppercase">
      {text}
      <span>{icon}</span>
    </button>
  );
}

export default OutlineButton;
