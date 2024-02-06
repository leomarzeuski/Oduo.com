import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import queryString from "query-string";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

function Feedback() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const { name: queryName } = queryString.parse(router.asPath.split(/\?/)[1]);
    setName(queryName);
  }, []);

  return (
    <>
      <Head>
        <title>ODuo - Obrigado por entrar em contato</title>
      </Head>
      <main className="flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '931404434872907');
              fbq('track', 'PageView');
              fbq('track', 'Lead');
              `,
          }}
        />
        <div className="bg-[#043F8D] flex items-center justify-center w-full h-48">
          <Image
            src="/assets/img/logo-white.png"
            width={150}
            height={100}
            alt="Logo"
          />
        </div>
        <div className="flex flex-col items-center py-12 px-6">
          <svg
            className="mb-4"
            width={140}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            dataName="Layer 1"
            viewBox="0 0 561 493"
          >
            <path
              d="M876.03027,689.45c-.98047,1.37-1.97021,2.73-2.95019,4.08A16.82838,16.82838,0,0,1,863.5,696.5h-527a16.90383,16.90383,0,0,1-9.21-2.72c-.91016-1.2-1.81006-2.41-2.72022-3.62006l.91016-.5L592.27,541.78a16.01919,16.01919,0,0,1,15.47021-.02L875.12988,688.95Z"
              transform="translate(-319.5 -203.5)"
              fill="#043F8D"
            />
            <path
              d="M863.5,378.5,632.28169,244.96964a64.023,64.023,0,0,0-63.98147-.03153L336.5,378.5a17.0241,17.0241,0,0,0-17,17v284a17.01984,17.01984,0,0,0,17,17h527a17.02879,17.02879,0,0,0,17-17v-284A17.02408,17.02408,0,0,0,863.5,378.5Zm15,301a15.03649,15.03649,0,0,1-15,15h-527a15.02706,15.02706,0,0,1-15-15v-284a15.01828,15.01828,0,0,1,15-15L568.30022,246.93811a64.023,64.023,0,0,1,63.98147.03153L863.5,380.5a15.01828,15.01828,0,0,1,15,15Z"
              transform="translate(-319.5 -203.5)"
              fill="#3f3d56"
            />
            <path
              d="M600.2998,539.18018a15.36345,15.36345,0,0,1-5.116-.8584l-.30249-.10694-.06128-.67236c-.18848.09277-.37866.18164-.56909.26563l-.20118.08837-.20141-.08886c-.42139-.18506-.83985-.39453-1.24365-.62207L408.5,433.73242V222.5A18.5208,18.5208,0,0,1,427,204H773a18.5208,18.5208,0,0,1,18.5,18.5V434.00244l-.25488.14356-183.25,103.04A15.75694,15.75694,0,0,1,600.2998,539.18018Z"
              transform="translate(-319.5 -203.5)"
              fill="#fff"
            />
            <path
              d="M600.2998,539.68018a15.85649,15.85649,0,0,1-5.282-.88672l-.60547-.21338-.02588-.28565-.33691.14795-.40234-.17676c-.43653-.19189-.86963-.40869-1.28784-.64453L408,434.02539V222.5a19.02154,19.02154,0,0,1,19-19H773a19.02162,19.02162,0,0,1,19,19V434.29492L608.24,537.62158A16.2527,16.2527,0,0,1,600.2998,539.68018Zm-4.01342-2.57666a14.49247,14.49247,0,0,0,10.97436-1.22559L790,433.125V222.5a17.01917,17.01917,0,0,0-17-17H427a17.01909,17.01909,0,0,0-17,17V432.85449l11.98962,6.7334,171.35047,96.29053q.34973.197.71.3706.36035-.17358.70923-.37011l1.34668-.75879Z"
              transform="translate(-319.5 -203.5)"
              fill="#3f3d56"
            />
            <path
              d="M876.06982,385.88,803.5,426.68,791,433.71,607.75,536.75a15.24213,15.24213,0,0,1-7.4502,1.93,14.91079,14.91079,0,0,1-4.9497-.83,12.05366,12.05366,0,0,1-1.3003-.5q-.61449-.27-1.1997-.6L421.5,440.46,409,433.44l-84.91992-47.72a1.011,1.011,0,0,1-.37988-1.37.99933.99933,0,0,1,1.35986-.38L409,431.14l12.5,7.02L593.83008,535a13.07441,13.07441,0,0,0,1.77978.83c.26026.1.53028.19.8003.27A13.26424,13.26424,0,0,0,606.77,535L791,431.42l12.5-7.03,71.58984-40.25a.99849.99849,0,1,1,.98,1.74Z"
              transform="translate(-319.5 -203.5)"
              fill="#3f3d56"
            />
            <path
              d="M483.5748,269.5h-28a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Z"
              transform="translate(-319.5 -203.5)"
              fill="#043F8D"
            />
            <path
              d="M516.5748,296.5h-61a8,8,0,0,1,0-16h61a8,8,0,0,1,0,16Z"
              transform="translate(-319.5 -203.5)"
              fill="#e6e6e6"
            />
            <path
              d="M687,368.5H514a8,8,0,0,1,0-16H687a8,8,0,0,1,0,16Z"
              transform="translate(-319.5 -203.5)"
              fill="#043F8D"
            />
            <path
              d="M703,399.5H497a8,8,0,0,1,0-16H703a8,8,0,0,1,0,16Z"
              transform="translate(-319.5 -203.5)"
              fill="#e6e6e6"
            />
            <path
              d="M703,429.5H497a8,8,0,0,1,0-16H703a8,8,0,0,1,0,16Z"
              transform="translate(-319.5 -203.5)"
              fill="#e6e6e6"
            />
          </svg>
          <h1 className="text-[#043F8D] capitalize font-extrabold text-3xl text-center">
            Obrigado, {name}
          </h1>
          <span className="block mt-4 text-center max-w-[600px] text-black">
            Obrigado por nos contatar! Em breve, nossa equipe entrará em contato
            para ajudá-lo e oferecer as melhores soluções para a sua empresa.
          </span>
          <div className="mt-2">
            <span className="text-sm text-gray">
              Obtenha assistência instantânea: Entre em contato via WhatsApp!
            </span>
          </div>
          <Link
            className="flex gap-2 items-center rounded-full bg-[#25D366] text-white px-4 py-3 mt-4"
            href="https://api.whatsapp.com/send?phone=5519992191070&text"
            target="__blank"
          >
            <BsWhatsapp size={24} />
            <span className="font-bold">Entrar em contato</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Feedback;