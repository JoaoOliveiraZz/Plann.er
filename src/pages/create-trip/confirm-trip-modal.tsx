import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
    toggleConfirmTripModal: () => void;
    confirmTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({ toggleConfirmTripModal, confirmTrip } : ConfirmTripModalProps){
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-zinc-900 rounded-xl w-[640px] px-6 py-5 text-left space-y-5">
            <div className="space-y-2">
              <header className="w-full flex items-center justify-between">
                <h2 className="text-white text-lg font-semibold">
                  Confirmar criação da viagem
                </h2>
                <button onClick={toggleConfirmTripModal}>
                  <X size={20} className="text-zinc-400" />
                </button>
              </header>
              <p className="text-zinc-400 text-sm">
                Para concluir a criação da viagem para{" "}
                <span className="text-zinc-100 font-bold">
                  Florianópolis, Brasil
                </span>{" "}
                nas datas de{" "}
                <span className="text-zinc-100 font-bold">
                  16 a 27 de Agosto de 2024
                </span>{" "}
                preencha seus dados abaixo:
              </p>
            </div>

            <form onSubmit={confirmTrip} className="space-y-3">
              <div className="px-4 bg-zinc-950 flex items-center gap-2 rounded-lg h-14">
                <User className="text-zinc-400" />
                <input
                  type="email"
                  placeholder="Digite o e-mail do convidado"
                  className="bg-transparent flex-1 outline-none"
                  name="email"
                />
              </div>
              <div className="px-4 bg-zinc-950 flex items-center gap-2 rounded-lg h-14">
                <Mail className="text-zinc-400" />
                <input
                  type="email"
                  placeholder="Digite o e-mail do convidado"
                  className="bg-transparent flex-1 outline-none"
                  name="email"
                />
              </div>
              <button
                className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 h-11 w-full justify-center"
                type="submit"
              >
                Confirmar criação da viagem
              </button>
            </form>
          </div>
        </div>
    )
}