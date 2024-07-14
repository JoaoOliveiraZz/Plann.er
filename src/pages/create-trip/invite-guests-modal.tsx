import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestsModalProps {
  toggleGuestModal: () => void;
  emailsToInvite: Array<string>;
  removeEmailFromInvite: (email: string) => void;
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  toggleGuestInput: () => void;
}

export function InviteGuestsModal({
  toggleGuestInput,
  emailsToInvite,
  removeEmailFromInvite,
  addNewEmailToInvite,
  toggleGuestModal,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 rounded-xl w-[640px] px-6 py-5 text-left space-y-5">
        <div className="space-y-2">
          <header className="w-full flex items-center justify-between">
            <h2 className="text-white text-lg font-semibold">
              Selecionar convidados
            </h2>
            <button onClick={toggleGuestModal}>
              <X size={20} className="text-zinc-400" />
            </button>
          </header>
          <p className="text-zinc-400 text-sm">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="bg-zinc-800 rounded-md px-2.5 py-1.5 flex gap-2 items-center"
                onClick={() => removeEmailFromInvite(email)}
              >
                <span className="text-zinc-300">{email}</span>
                <button type="button">
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="px-4 py-2.5 bg-zinc-950 flex items-center"
        >
          <div className="space-x-2.5 flex flex-1">
            <AtSign className="text-zinc-400" />
            <input
              type="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent flex-1 outline-none"
              name="email"
            />
          </div>
          <button
            className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2"
            onClick={toggleGuestInput}
            type="submit"
          >
            Convidar
            <Plus size={20} className="text-lime-950" />
          </button>
        </form>
      </div>
    </div>
  );
}
