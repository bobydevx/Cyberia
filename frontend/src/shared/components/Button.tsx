function Button({ text, icon }: { text: string; icon: any }) {
  return (
    <button className="flex items-center gap-1 bg-blue-secondary px-8 py-4 rounded-lg font-bold text-black uppercase">
      {text}
      <span>{icon}</span>
    </button>
  );
}

export default Button;
