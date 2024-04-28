//import useGithub from "../../hooks/github-hook";

export function About() {
  //const { githubState } = useGithub();

  return (
    <div className="w-full lg:w-fit rounded-lg bg-white">
      <div className="flex flex-col px-2 pt-5 pb-4 items-center">
        <div className="w-[8rem] pb-4 mx-3.5">
          <img src="/avatar.png" alt="Perfil img" className="rounded-full" />
        </div>
        <div className="flex flex-col space-y-1 border-t border-[#ECF2FA] py-2 w-full lg:items-start items-center">
          <h2 className="font-bold text-sm text-blue">Vander Lima</h2>
          <p className="font-normal text-xs text-grey3">Front-end Developer</p>
        </div>
        <div className="flex flex-col space-y-3.5 py-3.5 border-t border-[#ECF2FA] text-blue w-full items-center lg:items-start">
          <a
            href="#"
            className="font-normal text-xs flex gap-1.5 hover:underline"
          >
            <img src="/building.png" width={18} height={18} />
            @cubos_academy
          </a>
          <a
            href="#"
            className="font-normal text-xs flex gap-1.5 hover:underline"
          >
            <img src="/pin.png" width={18} height={18} />
            Fortaleza-Ce
          </a>
          <a
            href="#"
            className="font-normal text-xs flex gap-1.5 hover:underline"
          >
            <img src="/e-mail.png" width={18} height={18} />
            vnd.vander@gmail.com
          </a>
          <a
            href="#"
            className="font-normal text-xs flex gap-1.5 hover:underline"
          >
            <img src="/link.png" width={18} height={18} />
            https://cubos.academy
          </a>
          <a
            href="#"
            className="font-normal text-xs flex gap-1.5 hover:underline"
          >
            <img src="/twitter.png" width={18} height={18} />
            @vader_1
          </a>
        </div>
        <div className="flex flex-col space-y-3.5 py-3.5 border-t border-[#ECF2FA] text-blue w-full items-center lg:items-start">
          <h2 className="font-bold text-sm text-grey3">Organizações</h2>
          <a
            href="#"
            className="font-normal text-xs flex gap-1.5 hover:underline"
          >
            <img
              src="/cubos-academy.png"
              width={18}
              height={18}
              className="rounded-md"
            />
            Cubos Academy
          </a>
          <p className="font-normal text-xs flex gap-1.5 hover:underline">
            <img
              src="/aracati.jpg"
              width={18}
              height={18}
              className="rounded-md"
            />
            Aracati
          </p>
        </div>
      </div>
    </div>
  );
}
