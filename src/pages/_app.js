import { useEffect } from "react";
import AOS from "aos";

import "swiper/css";
import "aos/dist/aos.css";
import "@/styles/main.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      initClassName: "aos-init",
      once: true,
    });
  }, []);

  return <Component {...pageProps} />;
}
