import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Options() {
  return (
    <Card className="space-y-5 pl-6 pr-1">
      <CardHeader>
        <CardTitle className="font-normal text-lg text-grey1">
          O que você deseja fazer?
        </CardTitle>
      </CardHeader>
      <CardContent className="flex p-0 pb-9 gap-4 flex-wrap">
        <Button>Criar Repositório</Button>
        <Button variant="secondary">Importar Repositório</Button>
        <Button variant="secondary"> Novo Gist</Button>
        <Button variant="secondary">Nova Organização</Button>
        <Button variant="secondary">Novo Proj</Button>
      </CardContent>
    </Card>
  );
}
