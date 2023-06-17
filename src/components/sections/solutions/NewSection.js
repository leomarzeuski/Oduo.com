import Image from "next/image";
import React from "react";

function NewSection() {
  return (
    <secion className="flex flex-col lg:flex-row w-full justify-between items-center gap-16 lg:gap-32">
      <div className="flex flex-col gap-4 w-full lg:max-w-[45%]">
        <h2 className="text-black text-lg font-bold">
          Alcance o crescimento exponencial com a ODuo!
        </h2>
        <article className="text-gray flex flex-col gap-4">
          <span>
            Você está pronto para levar seu negócio a novos patamares? A ODuo é
            a assessoria de marketing de alta performance que vai impulsionar o
            seu sucesso digital. Nossa missão é simples: criar um processo de
            vendas lucrativo e escalável para a sua empresa, utilizando todo o
            poder da internet.
          </span>
          <span>
            Nossos métodos inovadores de aquisição de público, engajamento,
            monetização e retenção são a chave para multiplicar os seus lucros.
            Enquanto você levaria anos para atingir um crescimento
            significativo, nós o implementamos em apenas alguns meses.
          </span>
          <span>
            Imagine uma estreita colaboração entre o nosso time de especialistas
            e o seu time interno, trabalhando em harmonia para alcançar
            resultados extraordinários. Juntos, vamos criar uma estratégia
            personalizada, adaptada às necessidades exclusivas do seu negócio.
          </span>
          <span>
            Não perca mais tempo com estratégias ultrapassadas. A ODuo é a sua
            ponte para o sucesso digital. Aproveite a oportunidade de dominar o
            mercado e superar a concorrência.
          </span>
        </article>
      </div>
      <div className="w-full h-[270px] md:fit">
        <div className="relative flex-1 w-full h-[200px] md:h-[270px] lg:h-[340px]">
          <Image
            src="/assets/img/bunisses.jpg"
            className="z-20 w=full rounded-tl-[50px] shadow-md object-cover"
            fill={true}
            sizes="(min-width: 768px) 100%"
            alt="o que a oduo faz imagem"
          />
          <div className="hidden md:block absolute z-10 top-3 right-3 w-full h-full bg-background border-2 border-primary rounded-tl-[50px]" />
        </div>
      </div>
    </secion>
  );
}

export default NewSection;
