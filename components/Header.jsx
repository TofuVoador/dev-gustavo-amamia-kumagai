import React from "react";

const Header = () => {
  return (
    <header className="bg-primary py-4 fixed w-full bottom-0 sm:bottom-auto sm:top-0">
      <div className="container mx-auto flex justify-center sm:justify-between items-center">
        <a
          href="/"
          className="text-primary-contrast font-bold hidden sm:flex text-xs lg:text-2xl"
        >
          Gustavo Amamia Kumagai
        </a>
        <nav className="w-screen sm:w-auto flex justify-around gap-4 items-center text-xs sm:text-md md:text-xl">
          <a
            href="/"
            className="text-primary-contrast hover:text-secondary-contrast"
          >
            Início
          </a>
          <a
            href="/about"
            className="text-primary-contrast hover:text-secondary-contrast"
          >
            Sobre
          </a>
          <a
            href="/projects"
            className="text-primary-contrast hover:text-secondary-contrast"
          >
            Projetos
          </a>
          <a
            href="/contact"
            className="text-primary-contrast hover:text-secondary-contrast"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
