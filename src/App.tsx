import {
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  Plus,
  Settings2,
  UserRoundPlus,
  X,
} from "lucide-react";
import logo from "/logo.svg";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestInputOpened, setIsGuestInputOpened] = useState<boolean>(false);
  const [isGuestModalOpened, setIsGuestModalOpened] = useState<boolean>(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([
    "joaolima.gxp@gmail.com",
    "linajoaovictor@gmail.com",
  ]);

  function toggleGuestInput() {
    setIsGuestInputOpened(!isGuestInputOpened);
  }

  function toggleGuestModal() {
    setIsGuestModalOpened(!isGuestModalOpened);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();


    if(!email){
      return;
    }

    if(emailsToInvite.includes(email)){
      return;
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvite(emailToRemove: string){
    setEmailsToInvite(
      emailsToInvite.filter((email) => email !== emailToRemove)
    );
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

        {isGuestInputOpened && (
          <div className="h-16 bg-zinc-900 flex items-center px-4 rounded-xl shadow-shape gap-3">
            <div className="flex gap-2 flex-1 items-center">
              <button
                className="text-zinc-400 bg-transparent text-lg outline-none flex-1 flex items-center gap-2"
                onClick={toggleGuestModal}
              >
                <UserRoundPlus size={20} />
                <span>Quem estará na viagem?</span>
              </button>
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            <button
              className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2"
              onClick={toggleGuestInput}
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

      {isGuestModalOpened && (
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
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
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
      )}
    </div>
  );
}
