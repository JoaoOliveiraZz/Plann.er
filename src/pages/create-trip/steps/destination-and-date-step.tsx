import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDataStepProps{
    isGuestInputOpened: boolean;
    toggleGuestInput: () => void;
}

export function DestinationAndDataStep({
    isGuestInputOpened,
    toggleGuestInput
}: DestinationAndDataStepProps) {
  return (
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

      {isGuestInputOpened ? (
        <button
          className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 hover:bg-zinc-700"
          onClick={toggleGuestInput}
        >
          Alterar local/data <Settings2 />
        </button>
      ) : (
        <button
          className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2"
          onClick={toggleGuestInput}
        >
          Continuar
          <ArrowRight size={20} className="text-lime-950" />
        </button>
      )}
    </div>
  );
}
