import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          Gustavo Amamia Kumagai
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-400">
                Início
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-400">
                Sobre
              </a>
            </li>
            <li>
              <a href="/projects" className="text-white hover:text-gray-400">
                Projetos
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-400">
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
