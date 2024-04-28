import { FaStar } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface RepositoryItemProps {
  repoTitle: string;
  description: string;
}

function RepositoryItem({ repoTitle, description }: RepositoryItemProps) {
  return (
    <div className="bg-background flex justify-between px-3 py-3.5">
      <div className="flex flex-col space-y-1">
        <div className="flex gap-1">
          <img src="/book.png" width={16} height={16} alt="Livro Ícone" />
          <a href="#" className="text-blue  font-bold text-xs ">
            {repoTitle}
          </a>
        </div>
        <p className="font-normal text-[10px] text-grey3">{description}</p>
      </div>
      <Button size="base">
        <FaStar size={16} color={"#ffca28"} /> Star
      </Button>
    </div>
  );
}

export function Repository() {
  return (
    <Card className="py-[1.135rem] px-6">
      <CardHeader className="pt-0">
        <CardTitle className="font-normal text-lg text-grey1">
          Meus últimos repositórios
        </CardTitle>
        <CardContent className="p-0 pt-5 first:rounded-lg">
          <RepositoryItem repoTitle="vandL/repo" description="Repositório" />
          <RepositoryItem repoTitle="vandL/residencia" description="OpeR" />
          <RepositoryItem
            repoTitle="vandL/cubos-academy"
            description="Cubos Academy descrição"
          />
          <RepositoryItem
            repoTitle="vandL/login"
            description="Redesign de um sistema de login com integração"
          />
        </CardContent>
      </CardHeader>
    </Card>
  );
}
