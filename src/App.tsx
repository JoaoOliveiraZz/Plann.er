import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from "lucide-react";
import logo from "/logo.svg";
import { useState } from "react";

export function App() {
  const [isGuestInputOpened, setIsGuestInputOpened] = useState<boolean>(false);

  function showGuestInput() {
    setIsGuestInputOpened(!isGuestInputOpened);
  }

  return (
    <div className="h-screen flex items-center justify-center text-center bg-pattern bg-center bg-no-repeat">
      <div className="max-w-3xl w-full px-10 space-y-10">
        <div className="flex flex-col gap-2">
          <img src={logo} alt="plann.er" className="h-11" />
          <p className="text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="h-16 bg-zinc-900 flex items-center px-4 rounded-xl shadow-shape gap-3">
          <div className="flex gap-2 flex-1 items-center">
            <MapPin size={20} />
            <input
              type="text"
              placeholder="Para onde você vai?"
              className="text-zinc-400 bg-transparent text-lg outline-none flex-1"
              disabled={isGuestInputOpened}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Calendar size={20} />
            <input
              type="text"
              placeholder="Quando?"
              className="text-zinc-400 bg-transparent text-lg outline-none w-40"
              disabled={isGuestInputOpened}
            />
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          { isGuestInputOpened ?
            (<button
              className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 hover:bg-zinc-700"
              onClick={showGuestInput}
            >
              Alterar local/data <Settings2 />
            </button>)
            :
            (<button
              className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2"
              onClick={showGuestInput}
            >
              Continuar
              <ArrowRight size={20} className="text-lime-950" />
            </button>)
          }
        </div>

        {isGuestInputOpened && (
          <div className="h-16 bg-zinc-900 flex items-center px-4 rounded-xl shadow-shape gap-3">
            <div className="flex gap-2 flex-1 items-center">
              <UserRoundPlus size={20} />
              <input
                type="text"
                placeholder="Quem estará na viagem?"
                className="text-zinc-400 bg-transparent text-lg outline-none flex-1"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            <button
              className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2"
              onClick={showGuestInput}
            >
              Confirmar viagem
              <ArrowRight size={20} className="text-lime-950" />
            </button>
          </div>
        )}

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br />
          com nossos
          <a href="#" className="underline zinc-200 text-zinc-300">
            termos de uso
          </a>{" "}
          e
          <a href="#" className="underline zinc-200 text-zinc-300">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
