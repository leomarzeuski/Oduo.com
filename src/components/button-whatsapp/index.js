import { WhatsappLogo } from "phosphor-react";

export default function ButtonWhatsapp() {
  return (
    <a
      title="botão whatsapp"
      href="https://api.whatsapp.com/send?phone=5519992191070&text"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-3 right-3 z-30 w-14 h-14 flex items-center justify-center rounded-[50%] bg-green text-white shadow-md"
    >
      <WhatsappLogo size={32} />
    </a>
  );
}
