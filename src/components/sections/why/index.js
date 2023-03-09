import Image from "next/image";

export default function Why() {
  return (
    <section className="py-12">
      <div className="container flex flex-col gap-14">
        <h2
          className="lg:mb-6 text-3xl lg:text-4xl text-center font-extrabold text-black"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          Você está deixando de ganhar dinheiro! <br /> Quer saber o por quê?
        </h2>
        <div
          className="flex flex-col-reverse md:flex-row items-center justify-between"
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <div className="w-full md:max-w-[750px] max-w-[850px]">
            <h3 className="mb-4 text-xl md:text-2xl text-center lg:text-left font-extrabold text-black">
              Todos os dias, potenciais clientes buscam na internet por produtos
              similares aos que sua empresa oferece, mas será que eles estão
              encontrando a sua empresa?
            </h3>
            <p className="text-md text-center lg:text-left md:text-lg font-semibold text-gray">
              É nesse momento que{" "}
              <strong className="text-primary underline">
                você está perdendo a oportunidade de lucrar mais
              </strong>
              , essas{" "}
              <strong className="text-primary underline">
                pessoas precisam saber que você existe
              </strong>{" "}
              e o quão bom seu produto é! A equipe de especialistas da ODuo está
              aqui para solucionar seu problema.
            </p>
          </div>
          <div className="relative w-56 lg:w-64 h-40 lg:h-44 mb-6 md:mb-0">
            <Image
              src="/assets/img/why_1.png"
              fill={true}
              sizes="(min-width: 768px) 100%"
              alt="busca oduo imagem"
            />
          </div>
        </div>
        <div
          className="flex flex-col-reverse md:flex-row-reverse items-center justify-between"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <div className="w-full max-w-[800px]">
            <h3 className="mb-4 text-xl md:text-2xl text-center lg:text-left md:text-right font-extrabold text-black">
              Nossas estratégias de marketing digital são a solução para suas
              vendas.
            </h3>
            <p className="text-md md:text-lg text-center lg:text-left md:text-right font-semibold text-gray">
              <strong className="text-primary underline">
                Alcance potenciais clientes
              </strong>{" "}
              de forma inteligente e ágil. Temos não só as ferramentas, mas
              também os{" "}
              <strong className="text-primary underline">
                métodos validados
              </strong>{" "}
              que vão fazer a diferença no seu negócio.
            </p>
          </div>
          <div className="relative w-52 lg:w-48 h-40 lg:h-44 mb-6 md:mb-0">
            <Image
              src="/assets/img/why_2.png"
              fill={true}
              sizes="(min-width: 768px) 100%"
              alt="gráfico imagem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
