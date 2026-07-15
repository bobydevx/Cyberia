import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import clsx from "clsx";
// Shared
import Button from "@/shared/components/Button";
import OutlineButton from "@/shared/components/OutlineButton";
import StatCard from "@/shared/components/StatCard";
import MenuCard from "@/features/menu/components/MenuCard";
import RatingCard from "@/shared/components/RatingCard";

// Cabin
import type { Cabin } from "@/features/cabinas/types/cabin";
import CabinStatusPanel from "@/features/cabinas/components/CabinStatusPanel";
import CabinCard from "@/features/cabinas/components/CabinCard";
import GameCard from "@/features/juegos/components/GameCard";
import FAQCard from "@/shared/components/FAQCard";
import type { GameProps } from "../../juegos/types/game";
import type { MenuProps } from "../types/menu";

function Welcome() {
  // TODO: Actualizar useEffects y separar responsabilidades fetch
  const [cabins, setCabins] = useState<Cabin[]>([
    { id: 0, name: "", price: 0, status: "available" },
  ]);

  const [games, setGames] = useState<GameProps[]>([
    { id: "", background_image: "", genres: [], name: "", rating: "" },
  ]);

  const [menu, setMenu] = useState<MenuProps[]>([]);

  useEffect(() => {
    // Simulacro de cabinas
    const mockCabinas: Cabin[] = [
      {
        id: 1,
        name: "Cabina Alpha - 01",
        price: 15,
        status: "available",
        graphic_card: "RTX 5090",
        image: "cabina_01.jpg",
        processor: "Intel i9-14900K",
        ram: "32 RAM",
      },
      {
        id: 2,
        name: "Cabina Beta - 02",
        price: 12,
        status: "maintenance",
        graphic_card: "RTX 5090",
        image: "cabina_02.jpg",
        processor: "Intel i9-14900K",
        ram: "32 RAM",
      },
      {
        id: 3,
        name: "Cabina Gamma - 03",
        price: 20,
        status: "reserve",
        graphic_card: "RTX 5090",
        image: "cabina_03.jpg",
        processor: "Intel i9-14900K",
        ram: "32 RAM",
      },
      {
        id: 4,
        name: "Cabina Delta - 04",
        price: 10,
        status: "available",
        graphic_card: "RTX 5090",
        image: "cabina_04.jpg",
        processor: "Intel i9-14900K",
        ram: "32 RAM",
      },
      {
        id: 5,
        name: "Cabina Epsilon - 05",
        price: 10,
        status: "available",
        graphic_card: "RTX 5090",
        image: "cabina_05.jpg",
        processor: "Intel i9-14900K",
        ram: "32 RAM",
      },
      {
        id: 6,
        name: "Cabina Eta - 06",
        price: 10,
        status: "available",
        graphic_card: "RTX 5090",
        image: "cabina_06.jpg",
        processor: "Intel i9-14900K",
        ram: "32 RAM",
      },
    ];

    async function obtenerCabinas() {
      await setCabins(mockCabinas);
    }

    obtenerCabinas();
  }, []);

  // Menu

  useEffect(() => {
    async function obtenerMenu() {
      const response = await fetch("https://dummyjson.com/recipes?limit=4");

      const json = await response.json();
      setMenu(json.recipes);
    }

    obtenerMenu();
  }, []);

  useEffect(() => {
    async function obtenerJuegos() {
      const response = await fetch("https://jsonfakery.com/games/random/4");

      const json = await response.json();
      console.log(json);
      setGames(json);
    }

    obtenerJuegos();
  }, []);

  const statusColors = {
    available: "bg-green-primary",
    reserve: "bg-red-500",
    maintenance: "bg-orange-500",
  };
  return (
    <>
      {/* HEADER */}
      <section className="mt-12">
        <div className="container-app">
          <div className="grid grid-cols-2">
            {/* Left */}
            <article className="flex flex-col gap-4 ml-24 px-4 py-8">
              <div className="flex items-center gap-2 p-4 border border-white/14 rounded-full w-fit">
                <span className="bg-green-500 rounded-full w-3 h-3 animate-pulse"></span>
                <span>CENTRO ESPORTS · ONLINE 24 / 7</span>
              </div>

              {/*  */}

              <h1 className="my-8 font-outfit font-extrabold text-7xl">
                Reserva tu{" "}
                <span className="bg-clip-text bg-linear-to-t from-white/20 to-blue-primary text-transparent">
                  Cabina Gaming
                </span>
              </h1>

              <h2 className="font-manrope text-[#9ca3af] text-lg">
                Setups elite con RTX 5090, monitores 240Hz QD-OLED y conexión
                fibra dedicada. Entrena, conéctate, gana.
              </h2>

              <div className="flex gap-4 my-8">
                <Button text="Reservar Ahora" icon={<IoIosArrowForward />} />
                <OutlineButton text="Explorar Cabinas" />
              </div>

              <div className="gap-4 grid grid-cols-3">
                <StatCard statValue="24" statDescripcion="Cabinas Elite" />
                <StatCard statValue="1Gbps" statDescripcion="Fibra Dedicada" />
                <StatCard statValue="RTX" statDescripcion="Serie 50" />
              </div>
            </article>
            {/* Right */}
            <article className="bg-black mx-auto my-auto p-8 border border-blue-secondary rounded-2xl w-122 h-fit">
              <div className="flex justify-between text-xs uppercase">
                <h2 className="font-jetbrain text-[#6b7280]">Estado en vivo</h2>
                <div className="flex items-center gap-2 animate-pulse">
                  <span className="block bg-blue-secondary rounded-full w-3 h-3"></span>
                  <span className="text-blue-secondary">Live</span>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {cabins &&
                  cabins
                    .slice(0, 4)
                    .map((c) => (
                      <CabinStatusPanel
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        price={c.price}
                        status={c.status}
                      />
                    ))}
              </div>
            </article>
          </div>
        </div>

        {/* Carrousel cabinas */}
        <div className="flex items-center gap-4 bg-[#131a22]/80 backdrop-blur px-5 py-3 border border-white/10 rounded-xs overflow-x-auto">
          {cabins &&
            cabins.slice(0, 5).map((c) => (
              <div
                key={c.id}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full transition-colors cursor-pointer"
              >
                <span
                  className={clsx(
                    "rounded-full w-2.5 h-2.5",
                    statusColors[c.status],
                  )}
                />
                <span className="font-medium text-gray-200">{c.name}</span>

                <span className="font-bold text-blue-secondary text-sm">
                  {c.price}€/h
                </span>
              </div>
            ))}
        </div>
      </section>
      {/* CABINAS DISPONIBLES */}
      <section id="cabin" className="m-12 container-app">
        <p className="font-jetbrain text-blue-secondary text-md uppercase">
          Cabinas Destacadas
        </p>

        <h2 className="my-6 font-outfit font-semibold text-5xl">
          Cabinas Disponibles
        </h2>

        <article className="gap-4 grid md:grid-cols-3 lg:grid-cols-4 mt-12">
          {cabins &&
            cabins.map((c) => (
              <CabinCard
                key={c.id}
                id={c.id}
                name={c.name}
                price={c.price}
                status={c.status}
                graphic_card={c.graphic_card}
                image={c.image}
                processor={c.processor}
                ram={c.ram}
              />
            ))}
        </article>
      </section>
      {/* Juegos populares */}
      <section id="game" className="m-12 container-app">
        <p className="font-jetbrain text-blue-secondary text-md uppercase">
          Catálogo
        </p>

        <h2 className="my-6 font-outfit font-semibold text-5xl">
          Juegos populares
        </h2>

        <div className="gap-8 grid grid-cols-4 mt-8">
          {games && games.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </section>
      {/* Menú */}
      <section id="menu" className="m-12 container-app">
        <p className="font-jetbrain text-md text-purple-500 uppercase">Menú</p>

        <h2 className="my-6 font-outfit font-semibold text-5xl">
          Comida & Bebidas
        </h2>

        <div className="gap-8 grid grid-cols-4 mt-8">
          {menu && menu.map((dish) => <MenuCard key={dish.id} dish={dish} />)}
        </div>
      </section>
      {/* La comunidad */}
      <section className="m-12 container-app">
        <p className="font-jetbrain text-green-500 text-md uppercase">
          La comunidad
        </p>
        <h2 className="my-6 font-outfit font-semibold text-5xl">
          Que dicen los jugadores
        </h2>

        <article className="gap-8 grid grid-cols-3 mt-12">
          <RatingCard
            name="Jason S."
            opinion="El mejor setup que probé en mi vida. Las RTX 5090 vuelan en GTA VI."
            role="Streamer"
          />
          <RatingCard
            name="Erick S."
            opinion="Cabinas insonorizadas, conexión brutal. Ideal para scrims de Valorant."
            role="Pro Player"
          />
          <RatingCard
            name="Liang C."
            opinion="Vamos cada finde con amigos. Buen ambiente y la comida es genial."
            role="Casual Gamer"
          />
        </article>
      </section>
      {/* FAQ */}
      <section id="faq" className="container-app">
        <div className="text-center">
          <p className="font-jetbrain text-md text-red-500 text-center uppercase">
            FAQ
          </p>

          <h2 className="my-6 font-outfit font-semibold text-5xl">
            Preguntas Frecuentes
          </h2>
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
      {/* Cta Bottom */}
      <section className="my-8 text-center container-app">
        <h2 className="mt-20 font-outfit font-bold text-5xl text-center">
          Tu próxima partida <span>comienza aquí</span>{" "}
        </h2>
        <p className="mt-6 text-gray-300">
          Crea tu cuenta gratis y reserva tu cabina en segundos
        </p>

        <span className="flex justify-center my-8">
          <Button icon={<IoIosArrowForward />} text="Crear cuenta gratis" />
        </span>
      </section>
    </>
  );
}

export default Welcome;
