import { About } from "../components/home/About";
import { Followers } from "../components/home/Followers";
import { Info } from "../components/home/Info";
import { Options } from "../components/home/Options";
import { Repository } from "../components/home/Repository";
import { Navbar } from "../components/Navbar";

export function Profile() {
  return (
    <div className="bg-background w-scren min-h-screen flex flex-col justify-start font-rubik overflow-x-hidden">
      <Navbar />
      <div className="w-full gap-2.5 items-start justify-center py-6 flex flex-col lg:flex-row px-6 lg:px-[8rem]">
        <About />
        <div className="flex flex-col gap-8 w-full lg:w-fit">
          <Info />
          <Options />
          <Repository />
        </div>
        <div className="flex flex-col gap-1.5 w-full lg:w-fit">
          <Followers title="Seguindo" quantity={216} />
          <Followers title="Seguidores" quantity={1100} />
        </div>
      </div>
    </div>
  );
}
