import { ContactForm } from "@/components";

export default function Contact() {
  return (
    <section id="contato" className="py-12 bg-secondary">
      <div className="container flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="w-full">
          <h2
            className="mb-3 text-3xl lg:text-4xl text-center lg:text-left font-extrabold text-white"
            style={{ lineHeight: "120%" }}
          >
            Entenda porque seu concorrente está vendendo mais do que você!
          </h2>
          <p className="text-md md:text-lg text-center lg:text-left text-[#ededed] font-semibold">
            Você ganhou uma consultoria gratuita com um dos nossos
            especialistas: Preencha o formulário que entraremos em contato com
            você.
          </p>
          <div className="mt-6 md:mt-10 flex flex-col items-center lg:items-start">
            <div className="block">
              <p className="text-center lg:text-left text-white font-bold text-lg">
                E-mail
              </p>
              <span className="block text-center lg:text-left text-white">
                comercial.duo@gmail.com
              </span>
            </div>
            <div className="mt-3 block">
              <p className="text-center lg:text-left text-white font-bold text-lg">
                Instagram
              </p>
              <a
                href="https://instagram.com/oduo.assessoria"
                target="__blank"
                title="Instagram Oduo"
                className="flex text-white hover:text-gray"
              >
                @oduo.assessoria
              </a>
            </div>
            <div className="mt-3 block">
              <p className="text-center lg:text-left text-white font-bold text-lg">
                Telefone
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5519992191070&text"
                target="__blank"
                title="Whatsapp Oduo"
                className="flex text-white hover:text-gray"
              >
                (19) 99219-1070
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
