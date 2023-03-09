import { useRouter } from "next/router";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, X } from "phosphor-react";

const ModalContact = ({ showModal, toggleModal }) => {
  const router = useRouter();

  const handleNavigateToFormContact = () => {
    toggleModal();
    router.push("#contato");
  };
  return (
    <Dialog.Root open={showModal} onOpenChange={toggleModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0  z-40 bg-[rgba(0,0,0,0.5)]" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 z-50 w-[90vw] lg:w-full lg:max-w-[1200px] h-[70vh] lg:h-[75vh] -translate-x-1/2 -translate-y-1/2 p-4 md:p-8 lg:p-12 flex items-center bg-secondary rounded-sm shadow-lg"
          style={{
            background: `url('/assets/img/bg-modal.jpg') center bottom`,
          }}
        >
          <div className="w-full">
            <div className="relative w-[130px] h-[90px] lg:w-[240px] lg:h-[170px] mx-auto">
              <Image
                src="/assets/img/logo-white.png"
                fill={true}
                sizes="(min-width: 768px) 100%"
                alt="logo oduo"
              />
            </div>
            <div className="mt-6 lg:mt-12 w-full lg:w-2/3">
              <h1 className="mb-4 text-center lg:text-left text-3xl lg:text-4xl 2xl:text-5xl leading-[36px] lg:leading-[48px] 2xl:leading-[56px] font-extrabold text-white">
                Entenda porque seu concorrente está vendendo mais do que você!
              </h1>
              <p className="mb-8 text-center lg:text-left text-md lg:text-lg 2xl:text-xl text-[#ededed]">
                Você ganhou uma{" "}
                <strong className="px-1 lg:px-2 bg-primary rounded-3xl">
                  consultoria gratuita
                </strong>{" "}
                com um dos nossos especialistas: Preencha o formulário que
                entraremos em contato.
              </p>
              <button
                className="outline-none w-full lg:w-[15rem] p-3 bg-primary text-white flex items-center justify-center text-lg hover:opacity-90"
                onClick={handleNavigateToFormContact}
              >
                Ir para o formulário
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
          <Dialog.Close asChild>
            <button className="absolute right-4 top-4" aria-label="Close">
              <X className="text-white" size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalContact;
