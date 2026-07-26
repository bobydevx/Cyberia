import FAQCard from "@/shared/components/FAQCard";

function FAQQuestions() {
  return (
    <section id="faq" className="container-app">
      <div className="text-center">
        <p className="font-jetbrain text-md text-red-500 text-center uppercase">
          FAQ
        </p>

        <h2 className="my-6 font-semibold text-5xl">Preguntas Frecuentes</h2>
      </div>

      <article className="flex flex-col justify-center gap-4 mx-auto my-12 w-180">
        <FAQCard
          question="¿Cómo reservo una cabina?"
          answer="Inicia sesión, ve a Cabinas, elige tu favorita y selecciona fecha + hora."
          isOpen={true}
        />
        <FAQCard
          question="¿Tienen periféricos premium?"
          answer="Disponemos de los mejores periféricos del mercado."
          isOpen={false}
        />
        <FAQCard
          question="¿Están abierto las 24 horas?"
          answer="Estamos abiertos los 7 dias de la semana, las 24 horas del día."
          isOpen={false}
        />
      </article>
    </section>
  );
}

export default FAQQuestions;
