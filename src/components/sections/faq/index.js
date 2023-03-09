import { useState } from "react";
import { Plus } from "phosphor-react";

import listFaq from "@/constants/faq";

export default function Faq() {
  const [questionSelected, setQuestionSelected] = useState();

  const handleSelectQuestion = (indexSelected) => {
    setQuestionSelected((prevState) =>
      indexSelected === prevState ? null : indexSelected
    );
  };

  return (
    <section id="faq" className="py-10">
      <div className="container">
        <h2 className="mb-10 text-3xl text-center font-extrabold text-black">
          Nosso FAQ
        </h2>
        <ul className="w-full max-w-[60rem] mx-auto">
          {listFaq.map((question, index) => (
            <li
              key={index}
              className="border-b border-b-[#ddd] px-2 py-4 last:border-0"
              onClick={() => handleSelectQuestion(index)}
            >
              <div className="flex items-center cursor-pointer">
                <span>
                  <Plus
                    size={20}
                    className={`${
                      index === questionSelected ? "rotate-45" : ""
                    }  transition-all`}
                  />
                </span>
                <h3 className="ml-4 text-lg md:text-xl text-black font-bold">
                  {question.title}
                </h3>
              </div>
              {index === questionSelected ? (
                <p className="px-2 py-4 text-lg text-gray">{question.text}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
