export default function Banner() {
  return (
    <div className="flex flex-col max-w-[46.2rem] w-full items-center justify-center h-[23rem] rounded-lg bg-[#FFFFFF] space-y-11">
      <img
        src="/code_1.png"
        alt="Progamando Imagem"
        aria-label="Programando Imagem"
      />
      <div className="space-y-1 text-center">
        <p className="font-normal text-xs leading-[14.22px]">
          <span className="font-bold text-xs leading-[14.22px] text-purple">
            Siga
          </span>{" "}
          amigos e outros devs do seu interesse usando o botão seguir
        </p>
        <p className="font-normal text-xs leading-[14.22px]">
          <span className="font-bold text-xs leading-[14.22px] text-purple">
            Conheça
          </span>{" "}
          novos devs e repositórios através da aba explorar
        </p>
        <p className="font-normal text-xs leading-[14.22px]">
          <span className="font-bold text-xs leading-[14.22px] text-purple">
            Compartilhe
          </span>{" "}
          ideias e soluções em um só lugar
        </p>
      </div>
    </div>
  );
}
