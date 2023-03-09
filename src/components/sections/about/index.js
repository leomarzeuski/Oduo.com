import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "phosphor-react";

import Button from "@/components/button";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden pt-14 flex flex-col gap-10 lg:gap-24 bg-background"
    >
      <div
        className="z-20 container flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-20 bg-background"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <div className="relative w-full md:w-[60%] lg:w-full h-[200px] md:h-[270px] lg:h-[340px]">
          <Image
            src="/assets/img/about_1.jpg"
            fill={true}
            sizes="(min-width: 768px) 100%"
            className="z-20 rounded-tr-[50px] shadow-md"
            alt="o que a oduo faz imagem"
          />
          <div className="hidden md:block absolute z-10 top-3 left-3 w-full h-full bg-background border-2 border-primary rounded-tr-[50px]" />
        </div>
        <div className="py-3 lg:py-6 w-full lg:max-w-[500px]">
          <h3 className="text-2xl md:text-4xl text-center lg:text-left md:text-center font-extrabold text-black">
            O que a Oduo faz?
          </h3>
          <p className="mt-6 mb-8 text-md md:text-lg text-center lg:text-left text-gray">
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
          <p className="w-full lg:w-[60%] mb-6 flex justify-center items-center font-bold text-sm text-center lg:text-left text-black">
            <ArrowDown className="animate-bounce mr-4 text-black" size={30} />
            Agende agora mesmo um bate-papo para fazer a mudança que você
            precisa.
          </p>
          <Link href="#contato">
            <Button
              variant="filled"
              className="w-full mx-auto lg:mx-0 md:w-[18rem] bg-green"
            >
              Como faço para vender mais?
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="z-20 container flex flex-col lg:flex-row-reverse items-center justify-between gap-8 md:gap-116 lg:gap-20 bg-background"
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <div className="relative w-full md:w-[60%] lg:w-full h-[200px] md:h-[270px] lg:h-[340px]">
          <Image
            src="/assets/img/about_2.jpg"
            className="z-20 rounded-tl-[50px] shadow-md"
            fill={true}
            sizes="(min-width: 768px) 100%"
            alt="o que a oduo faz imagem"
          />
          <div className="hidden md:block absolute z-10 top-3 right-3 w-full h-full bg-background border-2 border-primary rounded-tl-[50px]" />
        </div>
        <div className="lg:py-6 w-full lg:max-w-[500px]">
          <h3 className="text-2xl md:text-4xl text-center lg:text-right font-extrabold text-black">
            Como isso acontece?
          </h3>
          <p className="mt-4 text-md md:text-lg text-center lg:text-right text-gray">
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
      <div className="z-20 py-12 bg-secondary">
        <div
          className="container flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-20 bg-secondary"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <div className="relative w-full md:w-[60%] lg:w-full h-[200px] md:h-[270px] lg:h-[340px]">
            <Image
              src="/assets/img/about_3.jpg"
              className="z-20 rounded-tr-[50px] shadow-md"
              fill={true}
              sizes="(min-width: 768px) 100%"
              alt="por que voce precisa da oduo imagem"
            />
            <div className="hidden md:block absolute z-10 top-3 left-3 w-full h-full bg-secondary border-2 border-primary rounded-tr-[50px]" />
          </div>
          <div className="pt-3 lg:pt-6 w-full lg:max-w-[500px]">
            <h3 className="text-2xl md:text-4xl text-center lg:text-left font-extrabold text-white">
              Por que você precisa da Oduo?
            </h3>
            <p className="mt-4 text-md md:text-lg text-center lg:text-left text-[#EDEDED]">
              Entenda que o mundo está mudando,{" "}
              <strong className="text-white underline">
                seus concorrentes que no passado não incomodavam hoje estão
                vendendo mais do que você.
              </strong>
              Tome uma ação e invista no futuro da sua empresa, nossa equipe te
              espera para resolvermos os problemas que estão impedindo o
              crescimento do seu negocio,{" "}
              <strong className="text-white underline">
                caso não goste do que estamos entregando devolvemos o seu
                dinheiro.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block z-10 absolute top-[-20%] left-[-5%] lg:w-[90%] 2xl:w-[55%] lg:h-[1200px] border-[30px] border-primary rounded-[50%] opacity-20" />
      <div className="hidden lg:block z-10 absolute bottom-[-20%] right-[-5%] lg:w-[70%] 2xl:w-[40%] lg:h-[900px] 2xl:h-[900px] border-[30px] border-primary rounded-[50%] opacity-20" />
    </section>
  );
}
