import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  UserCog,
} from "lucide-react";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 mx-auto py-10 space-y-8">
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
          <button className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 hover:bg-zinc-700">
            Alterar local/data <Settings2 />
          </button>
        </div>
      </div>
      <main className="grid grid-cols-2 gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-zinc-50 text-3xl font-semibold">Atividades</h2>
            <button className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2">
              <Plus size={20} className="text-lime-950" />
              Cadastrar atividade
            </button>
          </div>
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-zinc-300 text-xl font-semibold">
                Dia 17{" "}
                <span className="ml-2 text-xs font-normal text-zinc-500">
                  Sábado
                </span>
              </span>
              <p className="font-normal text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>
            <div className="space-y-3">
              <span className="text-zinc-300 text-xl font-semibold">
                Dia 18{" "}
                <span className="ml-2 text-xs font-normal text-zinc-500">
                  Domingo
                </span>
              </span>
              <div className="flex flex-col gap-3">
                <div className="rounded-xl bg-zinc-900 flex justify-between items-center px-4 h-10 w-full">
                  <div className="flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span>Corrida de Kart</span>
                  </div>
                  <span className="text-zinc-400 text-sm">14:00h</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <span className="text-zinc-300 text-xl font-semibold">
                Dia 19{" "}
                <span className="ml-2 text-xs font-normal text-zinc-500">
                  Segunda
                </span>
              </span>
              <div className="flex flex-col gap-3">
                <div className="rounded-xl bg-zinc-900 flex justify-between items-center px-4 h-10 w-full">
                  <div className="flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span>Academia em grupo</span>
                  </div>
                  <span className="text-zinc-400 text-sm">14:00h</span>
                </div>
                <div className="rounded-xl bg-zinc-900 flex justify-between items-center px-4 h-10 w-full">
                  <div className="flex items-center gap-3">
                    <CircleDashed className="size-5 text-zinc-400" />
                    <span>Academia em grupo</span>
                  </div>
                  <span className="text-zinc-400 text-sm">14:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="text-zinc-50 text-xl font-semibold">
              Links importantes
            </h2>
            <div className="space-y-5">
              <div className="flex gap-14 items-center">
                <div className="flex flex-col h-12 overflow-x-clip">
                  <span className="text-zinc-100">Reserva do AirBnB</span>
                  <a href="#" className="text-zinc-400 text-xs">
                    https://www.airbnb.com.br/rooms/104700011
                  </a>
                </div>
                <Link2 className="size-5 text-zinc-400" />
              </div>
              <div className="flex gap-14 items-center">
                <div className="flex flex-col h-12 overflow-x-clip">
                  <span className="text-zinc-100">Regras da casa</span>
                  <a href="#" className="text-zinc-400 text-xs">
                    https://www.airbnb.com.br/rooms/104700011
                  </a>
                </div>
                <Link2 className="size-5 text-zinc-400" />
              </div>
              <button className="flex items-center justify-center h-11 w-full gap-1.5 bg-zinc-800 rounded-lg text-zinc-200 px-5 py-2">
                <Plus className="size-5" />
                Cadastrar novo link
              </button>
            </div>
          </div>
          <div className="h-px bg-zinc-800 w-full" />
          <div className="space-y-6">
            <h2 className="text-zinc-50 text-xl font-semibold">
              Convidados
            </h2>
            <div className="space-y-5">
              <div className="flex gap-14 items-center">
                <div className="flex flex-col flex-1 h-12 overflow-x-clip">
                  <span className="text-zinc-100">Jessica White</span>
                  <a href="#" className="text-zinc-400 text-xs">
                    jessica.white44@yahoo.com
                  </a>
                </div>
                <CircleCheck className="size-5 text-lime-300" />
              </div>
              <div className="flex gap-14 items-center">
                <div className="flex flex-col flex-1 h-12 overflow-x-clip">
                  <span className="text-zinc-100">Jessica White</span>
                  <a href="#" className="text-zinc-400 text-xs">
                    jessica.white44@yahoo.com
                  </a>
                </div>
                <CircleDashed className="size-5 text-zinc-400" />
              </div>
              
              <button className="flex items-center justify-center h-11 w-full gap-1.5 bg-zinc-800 rounded-lg text-zinc-200 px-5 py-2">
                <UserCog className="size-5" />
                Gerenciar convidados
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
