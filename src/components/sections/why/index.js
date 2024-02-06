import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Why() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const leftVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const rightVariant = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-3xl lg:text-4xl text-center font-extrabold text-black">
          Você está deixando de ganhar dinheiro! <br /> Quer saber o por quê?
        </h2>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftVariant}
        >
        </motion.div>
        <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-extrabold text-black mb-4">
              Todos os dias, potenciais clientes buscam na internet por produtos similares aos que sua empresa oferece, mas será que eles estão encontrando a sua empresa?
            </h3>
            <p className="text-md md:text-lg font-semibold text-gray-700">
              É nesse momento que <strong className="text-primary underline">
                você está perdendo a oportunidade de lucrar mais
              </strong>, essas pessoas precisam saber que você existe e o quão bom seu produto é! A equipe de especialistas da ODuo está aqui para solucionar seu problema.
            </p>
          </div>
          <div className=" flex justify-end">
            <Image
              src="/assets/img/why_1.png"
              width={400}
              height={300}
              alt="busca oduo imagem"
            />
          </div>
        </div>


        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rightVariant}
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-extrabold text-black mb-4">
                Nossas estratégias de marketing digital são a solução para suas vendas.
              </h3>
              <p className="text-md md:text-lg font-semibold text-gray-700">
                <strong className="text-primary underline">
                  Alcance potenciais clientes
                </strong> de forma inteligente e ágil. Temos não só as ferramentas, mas também os métodos validados que vão fazer a diferença no seu negócio.
              </p>
            </div>
            <div className="">
              <Image
                src="/assets/img/why_2.png"
                width={isMobile ? 200 : 300}
                height={200}
                alt="gráfico imagem"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
