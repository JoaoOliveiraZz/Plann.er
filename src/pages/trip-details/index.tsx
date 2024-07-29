import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Clock,
  Link2,
  MapPin,
  Plus,
  Settings2,
  Tag,
  UserCog,
  X,
} from "lucide-react";
import { useState } from "react";

export function TripDetailsPage() {
  const [addNewActivityModal, setAddNewActivityModal] = useState(false);
  const [addNewLinkModal, setAddNewLinkModal] = useState(false);

  function toggleAddNewActivityModal() {
    setAddNewActivityModal(!addNewActivityModal);
  }

  function toggleAddNewLinkModal(){
    setAddNewLinkModal(!addNewLinkModal);
  }
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
      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-zinc-50 text-3xl font-semibold">Atividades</h2>
            <button onClick={toggleAddNewActivityModal} className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2">
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
              <button 
                className="flex items-center justify-center h-11 w-full gap-1.5 bg-zinc-800 rounded-lg text-zinc-200 px-5 py-2"
                onClick={toggleAddNewLinkModal}  
              >
                <Plus className="size-5" />
                Cadastrar novo link
              </button>
            </div>
          </div>
          <div className="h-px bg-zinc-800 w-full" />
          <div className="space-y-6">
            <h2 className="text-zinc-50 text-xl font-semibold">Convidados</h2>
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
      {addNewActivityModal && (<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[540px] h-72 px-6 py-5 bg-zinc-900 rounded-xl space-y-5">
          <header>
            <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-lg font-semibold">
                Confirmar criação da viagem
              </h2>
              <button onClick={toggleAddNewActivityModal}>
                <X size={20} className="text-zinc-400" />
              </button>
            </div>
            <span className="text-zinc-400 text-sm">
              Todos convidados podem visualizar as atividades.
            </span>
          </header>
          <div className="space-y-2">
            <div className="w-full h-14 bg-zinc-950 flex items-center px-4 py-2.5 gap-2.5 rounded-lg">
              <Tag className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Qual a atividade?"
                className="text-zinc-400 outline-none bg-transparent "
              />
            </div>
            <div className="flex gap-2">
              <div className="w-[344px] h-14 bg-zinc-950 flex items-center px-4 py-2.5 gap-2.5 rounded-lg">
                <Calendar className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="20 de Agosto"
                  className="text-zinc-100 outline-none bg-transparent placeholder:text-zinc-100"
                />
              </div>
              <div className="h-14 bg-zinc-950 flex items-center px-4 py-2.5 gap-2.5 rounded-lg">
                <Clock className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Horário"
                  className="text-zinc-100 outline-none bg-transparent"
                />
              </div>
            </div>
            <button className="w-full bg-lime-300 text-lime-950 mt-3 h-11 rounded-lg">
              Salvar atividade
            </button>
          </div>
        </div>
      </div>)}


      {addNewLinkModal && (<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="w-[540px] h-72 px-6 py-5 bg-zinc-900 rounded-xl space-y-5">
          <header>
            <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-lg font-semibold">
                Cadastrar link
              </h2>
              <button onClick={toggleAddNewLinkModal}>
                <X size={20} className="text-zinc-400" />
              </button>
            </div>
          </header>
          <div className="space-y-2">
            <div className="h-full flex flex-col gap-2">
              <div className="w-full h-14 bg-zinc-950 flex items-center px-4 py-2.5 gap-2.5 rounded-lg">
                <Tag className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Qual a atividade?"
                  className="text-zinc-400 outline-none bg-transparent "
                />
              </div>
              <div className="w-full h-14 bg-zinc-950 flex items-center px-4 py-2.5 gap-2.5 rounded-lg">
                <Link2 className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Qual a atividade?"
                  className="text-zinc-400 outline-none bg-transparent "
                />
              </div>
              
              <button className="w-full bg-lime-300 text-lime-950 mt-3 h-11 rounded-lg self-end">
                Salvar atividade
              </button>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
}
