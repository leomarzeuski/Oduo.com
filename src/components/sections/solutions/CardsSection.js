import React from "react";
import Card from "./Card";
import {
  Desktop,
  FacebookLogo,
  GoogleLogo,
  PencilSimple,
} from "phosphor-react";

export default function CardsSection() {
  return (
    <ul className="flex flex-col gap-6 md:grid md:grid-cols-2">
      <Card icon={GoogleLogo} title="Google/Meta Ads">
        Suponha investir R$ 1,00 e ter um retorno de R$ 5,00. Sim, isso é
        possível com a estratégia correta e personalizada para seu setor.
      </Card>
      <Card icon={Desktop} title="Criação de Site">
        A experiência do usuário conta muito para conversão do cliente, por isso
        temos as melhores opções de tecnologia e ferramentas para seu site
        converter muito mais.
      </Card>
      <Card icon={FacebookLogo} title="Gestão Rede Social">
        Não são apenas posts bonitinhos, os conteúdos bem elaborados e com
        estratégias de persuasão fazem com que você alcance muito mais
        resultado.
      </Card>
      <Card icon={PencilSimple} title="Design Personalizado">
        Temos profissionais a sua disposição para qualquer necessidade visual.
      </Card>
    </ul>
  );
}
