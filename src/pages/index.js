import { useState } from "react";
import Head from "next/head";
import Script from "next/script";

import {
  Footer,
  Header,
  ModalContact,
  SectionAbout,
  SectionClients,
  SectionContact,
  SectionFaq,
  SectionHero,
  SectionSolutions,
  SectionTestimonials,
  SectionWhy,
} from "@/components";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((oldState) => !oldState);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta charSet="utf-8" />
        <meta name="title" content="ODuo Assessoria" />
        <meta
          name="description"
          content="Oferecemos uma assessoria ideal em marketing para seu negócio prosperar e crescer cada
          vez mais, usando o poder da internet!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ODuo Assessoria" key="ogtitle" />
        <meta
          property="og:description"
          content="Oferecemos uma assessoria ideal em marketing para seu negócio prosperar e crescer cada
          vez mais, usando o poder da internet!"
          key="ogdesc"
        />
        <meta
          property="og:site_name"
          content="ODuo Assessoria"
          key="ogsitename"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>ODuo Assessoria</title>
      </Head>
      <main className="relative overflow-hidden">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3CYGGC48KL"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
           
          gtag('config', 'G-3CYGGC48KL');
          `}
        </Script>
        <Header />
        <SectionHero />
        <SectionWhy />
        <SectionAbout />
        <SectionClients />
        <SectionSolutions triggerModal={setShowModal} />
        <SectionTestimonials />
        <SectionFaq />
        <SectionContact />
        <Footer />
        <ModalContact showModal={showModal} toggleModal={toggleModal} />
      </main>
    </>
  );
}
