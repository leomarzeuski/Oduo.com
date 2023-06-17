import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Info,
} from "phosphor-react";

import Button from "@/components/button";
//import  CardsSection  from "./CardsSection";
import NewSection from "./NewSection";

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
        {/* <CardsSection/> */}
        <NewSection/>
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

