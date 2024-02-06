import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "phosphor-react";
import Button from "@/components/button";

export default function About() {
  return (
    <section id="sobre" className="bg-gray-100 pt-14 pb-10 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-10">
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              src="/assets/img/about_1.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
              alt="o que a oduo faz imagem"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
              O que a Oduo faz?
            </h3>
            <p className="mt-6 mb-8 text-sm md:text-md text-center lg:text-left text-gray">
              Nós fornecemos uma{" "}
              <strong className="text-primary">
                assessoria de marketing ideal para impulsionar o crescimento da
                sua empresa
              </strong>
              , utilizando todo o poder da internet. Compreendemos a sua
              audiência, o mercado em que o seu negócio está inserido e{" "}
              <strong className="text-primary">
                criamos um processo de vendas altamente lucrativo por meio da
                internet
              </strong>
              . Acreditamos que investir em marketing digital não é um custo, mas
              sim um investimento estratégico para o seu negócio alcançar o
              sucesso.
            </p>
            <div className="flex flex-col justify-center items-center">
              <p className=" w-full lg:w-[60%] mb-6 flex justify-center items-center font-bold text-sm text-center lg:text-left text-black">
                <ArrowDown className="animate-bounce mr-4 text-black" size={30} />
              </p>
              <Link href="#contato">
                <Button
                  variant="filled"
                  className="mt-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
                >
                  Como faço para vender mais?
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              src="/assets/img/about_2.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
              alt="o que a oduo faz imagem"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
              Como isso acontece?
            </h3>
            <p className="mt-4 text-sm md:text-md text-center lg:text-left text-gray">
              Com a estratégia correta, é possível{" "}
              <strong className="text-primary">
                atrair mais pessoas e aumentar significativamente as chances de
                convertê-las em clientes
              </strong>
              , impulsionando o crescimento da sua empresa. A nossa equipe está
              pronta para ajudar o seu negócio a atingir as metas que você
              definiu.{" "}
              <strong className="text-primary underline">
                Compreendemos as suas dificuldades, elaboramos um plano de ação
                personalizado e apresentamos o caminho certo para alcançar o
                sucesso.
              </strong>{" "}
              Deixe-nos mostrar como podemos ajudar a sua empresa a alcançar todo
              o seu potencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}