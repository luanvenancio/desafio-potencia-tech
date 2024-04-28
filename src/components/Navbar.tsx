import { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="w-screen xl:flex xl:items-center xl:justify-center bg-[#5C9ECF] h-fit z-50
        "
      >
        <div className="w-full flex items-center justify-around py-2 xl:max-w-screen-xl px-6 lg:px-[8rem]">
          <div className="flex justify-between xl:justify-start w-full">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
              aria-label="Orkut Site"
            >
              <img src="/logo.png" width={88} height={34} alt="Orkut Logo" />
            </a>
            <div className="flex xl:hidden">
              <button
                aria-label="Menu"
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
              >
                {isOpen ? (
                  <MdClose size={30} color={"#ffffff"} />
                ) : (
                  <GiHamburgerMenu size={30} color={"#ffffff"} />
                )}
              </button>
            </div>
            <div className="w-auto hidden xl:block">
              <ul className="hidden xl:flex flex-row py-[0.625rem] px-6 text-xs text-white">
                <li>
                  <a
                    href="/"
                    aria-label="inicio"
                    className="block font-bold px-3 hover:cursor-pointer"
                  >
                    Inicio
                  </a>
                </li>
                <div className="inline-block h-[0.750rem] w-px self-stretch bg-[#5292C1]"></div>
                <li>
                  <a
                    href="#"
                    aria-label="Pull Requests"
                    className="block font-normal px-3 hover:text-white/80 hover:cursor-pointer hover:underline leading-[14.22px]"
                  >
                    Pull Requests
                  </a>
                </li>
                <div className="inline-block h-[0.750rem] w-px self-stretch bg-[#5292C1]"></div>
                <li>
                  <a
                    href="#"
                    aria-label="Issues"
                    className="block font-normal px-3 hover:text-white/80 hover:cursor-pointer hover:underline leading-[14.22px]"
                  >
                    Issues
                  </a>
                </li>
                <div className="inline-block h-[0.750rem] w-px self-stretch bg-[#5292C1]"></div>
                <li>
                  <a
                    href="#"
                    aria-label="Marketplace"
                    className="block font-normal px-3 hover:text-white/80 hover:cursor-pointer hover:underline leading-[14.22px]"
                  >
                    Marketplace
                  </a>
                </li>
                <div className="inline-block h-[0.750rem] w-px self-stretch bg-[#5292C1]"></div>
                <li>
                  <a
                    href="#"
                    aria-label="Explore"
                    className="block font-normal px-3 hover:text-white/80 hover:cursor-pointer hover:underline leading-[14.22px]"
                  >
                    Explore
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-auto hidden xl:flex flex-row gap-6 items-center jusitfy-center">
            <div className="h-[0.750rem] w-px bg-[#5292C1]"></div>
            <a
              href="#"
              aria-label="Pull Requests"
              className="block text-xs font-normal px-3 text-white hover:text-white/80 hover:cursor-pointer hover:underline leading-[14.22px]"
            >
              Sair
            </a>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <AiOutlineSearch className="w-4 h-4" color={"#FFFFFF"} />
              </div>
              <input
                type="text"
                className="rounded-[2.125rem] p-2.5 bg-[#5579A1] gap-4 placeholder:text-white text-white ps-10"
                placeholder="Pesquisar no login"
              ></input>
            </div>
          </div>
        </div>
        {isOpen ? (
          <div className="z-50 relative">
            <div className="xl:hidden absolute top-0 bg-[#5C9ECF] w-screen p-0 min-h-screen mb-2 space-y-5">
              <ul className="flex xl:hidden flex-col p-4 gap-5 items-center w-full text-white">
                <li>
                  <a
                    href="/"
                    aria-label="inicio"
                    className="block font-bold px-3 hover:cursor-pointer"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Pull Requests"
                    className="block font-normal px-3 hover:text-white/80 hover:cursor-pointer hover:underline leading-[14.22px]"
                  >
                    Pull Requests
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Issues"
                    className="block font-normal px-3 hover:text-white/80 hover:cursor-pointer hover:underline leading-[14.22px]"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Marketplace"
                    className="block font-normal px-3 hover:text-white/80 hover:cursor-pointer hover:underline leading-[14.22px]"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Explore"
                    className="block font-normal px-3 hover:text-white/80 hover:cursor-pointer hover:underline leading-[14.22px]"
                  >
                    Explore
                  </a>
                </li>
              </ul>
              <div className="w-auto xl:hidden flex flex-col gap-5 items-center">
                <a
                  href="#"
                  aria-label="Pull Requests"
                  className="block font-normal px-3 text-white hover:text-white/80 hover:cursor-pointer hover:underline leading-[14.22px]"
                >
                  Sair
                </a>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <AiOutlineSearch className="w-4 h-4" color={"#FFFFFF"} />
                  </div>
                  <input
                    type="text"
                    className="rounded-[2.125rem] p-2.5 bg-[#5579A1] gap-4 placeholder:text-white text-white ps-10"
                    placeholder="Pesquisar no login"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}
