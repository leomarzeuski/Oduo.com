import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Info } from "phosphor-react";
import Button from "@/components/button";
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
      { threshold: 0 }
    );

    sectionRef.current && observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [modalHasOpened, triggerModal]);

  return (
    <section ref={sectionRef} id="solucoes" className="py-10 bg-background">
      <div className="container">
        <h2 className="mb-10 lg:mb-16 text-4xl lg:text-5xl text-center font-bold text-black">
          Nossas soluções
        </h2>
        <NewSection />
        <div className="flex flex-col md:flex-row items-center border-2 border-yellow rounded-md bg-white p-4 mt-8">
          <Info size={28} className="text-yellow mr-4 mb-3 md:mb-0" />
          <p className="text-[#C4A93D] text-md md:text-lg font-semibold">
            Receba sugestões assistidas por <strong className="font-bold">Inteligência Artificial</strong> para ajudar a tornar seu conteúdo mais envolvente.
          </p>
        </div>
        <Link href="#contato">
          <Button variant="filled" className="w-full md:w-auto px-10 py-3 mx-auto mt-8 text-lg">
            Vamos bater um papo!
          </Button>
        </Link>
      </div>
    </section>
  );
}
