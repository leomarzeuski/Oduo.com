import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "phosphor-react";

import Button from "@/components/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden lg:h-[100vh] pt-24 xl:pt-20 2xl:pt-24 pb-12 bg-secondary">
      <div className="h-full container flex flex-col lg:flex-row items-center justify-between md:gap-10">
        <div
          className="z-20 w-full lg:max-w-[500px] mb-12 md:mb-0"
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <h1 className="font-extrabold text-[2.4rem] xl:text-4xl 2xl:text-6xl text-center lg:text-left leading-[42px] xl:leading-[48px] text-white">
            As maiores empresas não são as melhores, mas sim as que investem em
            Marketing!
          </h1>
          <p className="mt-6 mb-8 text-md text-center lg:text-left xl:text-lg font-semibold text-[#ededed]">
            Temos consciência que o antigo modelo de marketing não funciona
            mais.
            <strong className="font-extrabold underline">
              Se antecipe ao novo
            </strong>{" "}
            e <strong className="font-extrabold underline">transforme</strong>{" "}
            sua empresa em uma máquina de fazer dinheiro.
          </p>
          <Link href="#contato">
            <Button className="w-full lg:w-[200px]" variant="filled">
              Entrar em contato
            </Button>
          </Link>
        </div>
        <div className="relative w-full md:w-[75%] lg:w-[50%] h-[280px] md:h-[400px] lg:h-[450px] lg:mr-[-2rem] 2xl:mr-[-6rem] lg:animate-upperSlow">
          <Image
            src="/assets/img/hero.png"
            fill={true}
            sizes="(min-width: 768px) 100%"
            alt="oduo hero imagem"
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-10 lg:mt-0">
        <ArrowDown className="animate-bounce text-white" size={30} />
      </div>
      <div className="hidden lg:block z-10 absolute top-[-10%] left-[-5%] lg:w-[90%] 2xl:w-[75%] lg:h-[1200px] 2xl:h-[1500px] border-[30px] border-white rounded-[50%] opacity-5" />
      <div className="hidden lg:block z-10 absolute lg:bottom-[-60%] 2xl:bottom-[-80%] lg:right-[-25%] 2xl:right-[-5%] lg:w-[70%] 2xl:w-[55%] lg:h-[700px] 2xl:h-[1100px] border-[30px] border-white rounded-[50%] opacity-5" />
    </section>
  );
}
