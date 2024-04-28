import { Metrics } from "./Metrics";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const sorte = [
  "Nunca diga nunca, pois os limites são como os medos: sempre são apenas ilusão",
  "Sabe viver quem dedica um dia ao sonho e outro à realidade.",
  "Sempre podemos ser medianos e fazer o que é normal. Não estou nessa para fazer o que é normal.",
  "Nós não desistimos.",
  "Aquele que trabalha duro pode superar um gênio,mas,de nada adianta trabalhar duro se você não confia em você mesmo.",
  "Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir.",
];

export function Info() {
  const aleatorio = Math.floor(Math.random() * 5);
  return (
    <Card className="bg-white w-full px-6">
      <CardHeader>
        <CardTitle className="font-normal text-grey1 pb-8 text-[28px]">
          Bem vindo(a), Jandinho
        </CardTitle>
        <CardContent className="space-y-8 p-0 pb-6">
          <CardDescription className="text-xs flex gap-1">
            <span className="font-bold text-nowrap">Sorte de hoje:</span>{" "}
            <p className="font-normal">{sorte[aleatorio ? aleatorio : 0]}</p>
          </CardDescription>
          <div className="flex gap-8">
            <Metrics content="Repositórios" quantity={64}>
              <img src="/book.png" width={16} height={16} alt="Book" />
            </Metrics>
            <Metrics content="Favoritos" quantity={1400}>
              <img src="/star.png" width={16} height={16} alt="Star" />
            </Metrics>
            <Metrics content="Seguidores" quantity={1100}>
              <img src="/folower.png" alt="Folower" width={16} height={16} />
            </Metrics>
            <Metrics content="Seguindo" quantity={216}>
              <img
                src="/binoculars.png"
                width={16}
                height={16}
                alt="Binoculars"
              />
            </Metrics>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
