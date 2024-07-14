import logo from "/logo.svg";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDataStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const [isGuestInputOpened, setIsGuestInputOpened] = useState<boolean>(false);
  const [isGuestModalOpened, setIsGuestModalOpened] = useState<boolean>(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([
    "joaolima.gxp@gmail.com",
    "linajoaovictor@gmail.com",
  ]);
  const [isConfirmTripModalOpened, setIsConfirmTripModalOpened] =
    useState<boolean>(false);

  const navigate = useNavigate();

  function toggleGuestInput() {
    setIsGuestInputOpened(!isGuestInputOpened);
  }

  function toggleGuestModal() {
    setIsGuestModalOpened(!isGuestModalOpened);
  }

  function toggleConfirmTripModal() {
    setIsConfirmTripModalOpened(!isConfirmTripModalOpened);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvite(emailToRemove: string) {
    setEmailsToInvite(
      emailsToInvite.filter((email) => email !== emailToRemove)
    );
  }

  function confirmTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/trip/123");
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

        <DestinationAndDataStep
          toggleGuestInput={toggleGuestInput}
          isGuestInputOpened={isGuestInputOpened}
         />

        {isGuestInputOpened && (
          <InviteGuestsStep
            emailsToInvite={emailsToInvite}
            toggleConfirmTripModal={toggleConfirmTripModal}
            toggleGuestModal={toggleGuestModal} 
          />
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

      {isGuestModalOpened && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
          toggleGuestInput={toggleGuestInput}
          toggleGuestModal={toggleGuestModal}
        />
      )}

      {isConfirmTripModalOpened && (
        <ConfirmTripModal
          toggleConfirmTripModal={toggleConfirmTripModal}
          confirmTrip={confirmTrip}
        />
      )}
    </div>
  );
}
