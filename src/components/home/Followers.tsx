import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface FollowerProps {
  name: string;
  image: string;
}
function Follower({ image, name }: FollowerProps) {
  return (
    <div className="rounded-lg w-[5.25rem] h-[6.25rem] relative">
      <img
        src={image}
        alt="perfil Foto"
        className="w-[83px] h-[6.25rem] rounded-lg"
      />
      <div className="absolute bottom-2.5 px-2 pb-2.5 w-full">
        <a href="#" className="size-[10px] font-medium text-white text-wrap">
          {name}
        </a>
      </div>
    </div>
  );
}
interface FollowersProps {
  title: string;
  quantity: number;
}
export function Followers({ title, quantity }: FollowersProps) {
  return (
    <Card className="pt-4 px-5 w-full pb-6 lg:w-[20rem]">
      <CardHeader className="pt-0">
        <CardTitle className="text-base font-bold text-grey1 flex gap-2">
          {title}
          <span className="text-blue font bold text-sm">
            (
            {quantity.toLocaleString("en-US", {
              maximumFractionDigits: 2,
              notation: "compact",
              compactDisplay: "short",
            })}
            )
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-2.5 p-0">
        <Follower name="Vander Lima" image="/diegofernandes.png" />
        <Follower name="Robyn Rihanna" image="/maykbrito.png" />
        <Follower name="Travis Scott" image="/rodrigogoncalves.png" />
        <Follower name="Billzinho" image="/felipesales.png" />
        <Follower name="Naruto Uzumaki" image="/naruto.jpg" />
        <Follower name="Marta 10" image="/vinifraga.png" />
      </CardContent>
      <CardFooter className="pt-4 border-[#F4F4F4] border-t mt-4">
        <a href="#" className="font-bold text-blue hover:underline text-sm">
          Ver Todos
        </a>
      </CardFooter>
    </Card>
  );
}
