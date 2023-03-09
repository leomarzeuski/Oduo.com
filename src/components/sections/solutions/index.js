import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Desktop,
  FacebookLogo,
  GoogleLogo,
  Info,
  PencilSimple,
} from "phosphor-react";

import Button from "@/components/button";

export default function Solutions({ triggerModal }) {
  const [modalHasOpened, setModalHasOpened] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !modalHasOpened) {
          triggerModal(true);
          setModalHasOpened(true);
        }
      },
      {
        threshold: 0,
      }
    );

    sectionRef.current && observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [modalHasOpened, triggerModal]);

  return (
    <section ref={sectionRef} id="solucoes" className="py-10 bg-background">
      <div className="container">
        <h2 className="mb-10 lg:mb-[6rem] text-3xl text-center font-extrabold text-black">
          Nossas soluções
        </h2>
        <ul className="flex flex-col gap-6 md:grid md:grid-cols-2">
          <Card icon={GoogleLogo} title="Google/Meta Ads">
            Suponha investir R$ 1,00 e ter um retorno de R$ 5,00. Sim, isso é
            possível com a estratégia correta e personalizada para seu setor.
          </Card>
          <Card icon={Desktop} title="Criação de Site">
            A experiência do usuário conta muito para conversão do cliente, por
            isso temos as melhores opções de tecnologia e ferramentas para seu
            site converter muito mais.
          </Card>
          <Card icon={FacebookLogo} title="Gestão Rede Social">
            Não são apenas posts bonitinhos, os conteúdos bem elaborados e com
            estratégias de persuasão fazem com que você alcance muito mais
            resultado.
          </Card>
          <Card icon={PencilSimple} title="Design Personalizado">
            Temos profissionais a sua disposição para qualquer necessidade
            visual.
          </Card>
        </ul>
        <div className="w-full mt-10 p-3 flex flex-col md:flex-row md:items-center border-2 border-yellow rounded-md bg-white">
          <Info size={24} className="mb-2 md:mb-0 mr-4 text-yellow" />
          <p className="text-[#C4A93D] text-sm font-semibold">
            Receba sugestões assistidas por{" "}
            <strong className="font-extrabold">
              {" "}
              Inteligência Artificial{" "}
            </strong>{" "}
            para ajudar a tornar seu conteúdo mais envolvente.
          </p>
        </div>

        <Link href="#contato">
          <Button variant="filled" className="w-full md:w-[20rem] mx-auto mt-8">
            Vamos bater um papo!
          </Button>
        </Link>
      </div>
    </section>
  );
}

function Card({ children, icon: Icon, title }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-[15rem] md:h-[18rem] lg:h-[12rem] p-4 flex flex-col justify-between rounded-md shadow-sm bg-primary hover:bg-white lg:odd:mt-[-3rem]"
      data-aos="zoom-out"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-10 h-12 flex items-center justify-center">
        <Icon
          className={`w-6 h-6 ${isHovered ? "text-primary" : "text-white"}`}
        />
      </div>
      <div className="h-full pt-4">
        <h3
          className={`mb-4 text-xl font-bold ${
            isHovered ? "text-black" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p
          className={`${
            isHovered ? "text-gray" : "text-[#ededed]"
          } font-semibold`}
        >
          {children}
        </p>
      </div>
    </div>
  );
}
