import React from "react";

const Header = () => {
  return (
    <header className="bg-primary py-4 fixed w-full bottom-0 sm:bottom-auto sm:top-0 border-t-2 border-white sm:border-none">
      <div className="text-white container mx-auto flex justify-center sm:justify-between items-center">
        <a href="/" className="font-bold hidden sm:flex text-xs lg:text-2xl">
          Gustavo Amamia Kumagai
        </a>
        <nav className="w-screen sm:w-auto grid grid-cols-4 gap-2 sm:flex sm:gap-4 px-2 items-center text-xs sm:text-md md:text-xl">
          <a href="/" className="hover:text-secondary text-center">
            Início
          </a>
          <a href="/about" className="hover:text-secondary text-center">
            Sobre
          </a>
          <a href="/projects" className="hover:text-secondary text-center">
            Projetos
          </a>
          <a href="/contact" className="hover:text-secondary text-center">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
