import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
    toggleGuestModal: () => void;
    toggleConfirmTripModal: () => void;
    emailsToInvite: Array<string>
}

export function InviteGuestsStep({
    emailsToInvite,
    toggleConfirmTripModal,
    toggleGuestModal
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 flex items-center px-4 rounded-xl shadow-shape gap-3">
      <div className="flex gap-2 flex-1 items-center">
        <button
          className="text-zinc-400 bg-transparent text-lg outline-none flex-1 flex items-center gap-2"
          onClick={toggleGuestModal}
        >
          <UserRoundPlus size={20} />
          {emailsToInvite.length > 0 ? (
            <span className="text-zinc-100 text-lg">
              {emailsToInvite.length} Pessoa(s) foram convidada(s)
            </span>
          ) : (
            <span>Quem estará na viagem?</span>
          )}
        </button>
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      <button
        className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2"
        onClick={toggleConfirmTripModal}
      >
        Confirmar viagem
        <ArrowRight size={20} className="text-lime-950" />
      </button>
    </div>
  );
}
