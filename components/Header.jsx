import React from "react";

const Header = () => {
  return (
    <header className="bg-primary border-t-2 border-t-dark sm:border-t-0 py-4 fixed w-full bottom-0 sm:bottom-auto sm:top-0">
      <div className="container mx-auto flex justify-center sm:justify-between items-center">
        <a href="/" className=" font-bold hidden sm:flex text-xs lg:text-2xl">
          Gustavo Amamia Kumagai
        </a>
        <nav>
          <ul className="flex space-x-4 text-xs lg:text-lg">
            <li>
              <a
                href="/"
                className="text-primary-contrast hover:text-secondary-contrast"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-primary-contrast hover:text-secondary-contrast"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-primary-contrast hover:text-secondary-contrast"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-primary-contrast hover:text-secondary-contrast"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
