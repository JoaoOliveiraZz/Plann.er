import { Calendar, MapPin, Settings2 } from "lucide-react";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 mx-auto py-10">
      <div className="rounded-xl bg-zinc-900 h-16 flex items-center justify-between px-4 shadow-shape">
        <div className="flex gap-2 items-center">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>
          <div className="w-px h-6 bg-zinc-800" />
          <button
            className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 hover:bg-zinc-700"
          >
            Alterar local/data <Settings2 />
          </button>
        </div>
      </div>
      
    </div>
  );
}
