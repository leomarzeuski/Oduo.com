import { ContactForm } from "@/components";

export default function Contact() {
  return (
    <section id="contato" className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="w-full md:w-1/2 text-white">
            <h2 className="mb-4 text-4xl lg:text-5xl font-extrabold text-center md:text-left leading-tight">
              Entenda porque seu concorrente está vendendo mais do que você!
            </h2>
            <p className="text-lg text-center md:text-left mb-6">
              Você ganhou uma consultoria gratuita com um dos nossos especialistas. Preencha o formulário e entraremos em contato.
            </p>
            <div className="mt-6 md:mt-10 space-y-4">
              <div>
                <h3 className="text-lg font-bold">E-mail</h3>
                <a href="mailto:comercial.duo@gmail.com" className="hover:text-blue-300">comercial.duo@gmail.com</a>
              </div>
              <div>
                <h3 className="text-lg font-bold">Instagram</h3>
                <a href="https://instagram.com/oduo.assessoria" target="__blank" className="hover:text-blue-300">
                  @oduo.assessoria
                </a>
              </div>
              <div>
                <h3 className="text-lg font-bold">Telefone</h3>
                <a href="https://api.whatsapp.com/send?phone=5519992191070&text" target="__blank" className="hover:text-blue-300">
                  (19) 99219-1070
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">

            <ContactForm />

          </div>
        </div>
      </div>
    </section>
  );
}
