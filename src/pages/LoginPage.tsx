import Banner from "../components/Banner";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";

function Login() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background font-rubik">
      <div className="max-w-screen-xl w-[70rem] space-y-4 px-6 lg:px-0 py-4">
        <div className="flex w-full lg:gap-2 gap-8 lg:flex-row flex-col">
          <Banner />
          <Card className="px-20 pb-10 bg-[#F1F9FE]">
            <CardHeader className="px-10 pt-9 pb-5 w-full">
              <CardTitle className="text-center">
                Acesse o <b>login</b> com seu e-mail
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 h-fit w-full px-0">
              <Input type="text" placeholder="Digite o seu e-mail" />
              <Input type="text" placeholder="Digite o sua senha" />
              <a
                href="#"
                className="font-normal text-[#2E7BB4] hover:underline text-[9px]"
              >
                esqueceu a senha ?
              </a>
            </CardContent>
            <CardFooter className="pt-8 w-full">
              <button
                type="submit"
                className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none px-3 w-full py-2.5 rounded-md bg-[#2E7BB4] hover:bg-[#1b6ba8] text-[#FFFFFF] font-bold text-xs"
              >
                Login
              </button>
            </CardFooter>
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
