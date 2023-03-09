import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Envelope, List } from "phosphor-react";

import ActiveLink from "./active-link";
import Button from "../button";
import Logo from "../logo";

export default function Header() {
  const menuMobileRef = useRef();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuMobileRef.current &&
        !menuMobileRef.current.contains(event.target)
      ) {
        setMenuIsOpen(false);
      }
    };

    if (menuIsOpen) {
      document.addEventListener("click", handleClickOutside, true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [menuIsOpen]);

  const toggleMenu = () => setMenuIsOpen((prevState) => !prevState);

  return (
    <header className="h-20 bg-white">
      <div className="h-full container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex items-center">
          <ul className="hidden md:flex mr-10 lg:mr-14 gap-10 lg:gap-14">
            <Menu />
          </ul>
          <Link href="#contato">
            <Button className="mr-6 md:mr-0" variant="filled">
              <Envelope size={20} style={{ marginRight: "0.5rem" }} />
              Entrar em Contato
            </Button>
          </Link>
          <button className="flex md:hidden" onClick={toggleMenu}>
            <List size={28} className="text-primary" />
          </button>
          <div
            className={`${
              menuIsOpen ? "block" : "hidden"
            } md:hidden absolute z-30 inset-0 bg-black bg-opacity-50`}
          />
          {menuIsOpen && (
            <ul
              ref={menuMobileRef}
              className="fixed flex md:hidden transition-transform transform z-40 top-0 bottom-0 right-0 w-[50%] py-20 px-8 flex-col gap-12 bg-white"
              onClick={toggleMenu}
            >
              <Menu />
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

function Menu() {
  return (
    <>
      <ActiveLink href="/">Início</ActiveLink>
      <ActiveLink href="/#solucoes">Soluções</ActiveLink>
      <ActiveLink href="/#sobre">Sobre</ActiveLink>
      <ActiveLink href="/#depoimentos">Depoimentos</ActiveLink>
      <ActiveLink href="/#faq">FAQ</ActiveLink>
    </>
  );
}
