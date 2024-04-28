export default function Footer() {
  return (
    <div className="w-full flex justify-center p-1.5 bg-[#BBCDE8] rounded-lg">
      <p className="font-normal text-xs leading-[14.22px]">
        © 2022 Login - <LinkFooter text="Sobre o Login" /> -{" "}
        <LinkFooter text="Centro de segurança" /> -{" "}
        <LinkFooter text="Privacidade" /> - <LinkFooter text="Termos" /> -{" "}
        <LinkFooter text="Contato" />
      </p>
    </div>
  );
}

interface LinkPro {
  text: string;
}
function LinkFooter({ text }: LinkPro) {
  return (
    <a
      href="#"
      className="font-normal text-xs leading-[14.22px] text-[#2E7BB4] hover:underline"
    >
      {text}
    </a>
  );
}
