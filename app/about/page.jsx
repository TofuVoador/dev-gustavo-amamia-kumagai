import React from "react";

const About = () => {
  return (
    <section className="container mx-auto mt-32 mb-16">
      <h1 className="text-primary dark:text-primary-contrast text-xl font-bold text-center mb-4">
        Sobre
      </h1>
      <div className="bg-transparent mb-8 sm:bg-dark p-2 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-sm text-secondary-contrast">Formação</h3>
          <h2 className="text-lg font-semibold text-primary-contrast">
            Análise e Desenvolvimento de Sistemas
          </h2>
          <p className="text-sm text-secondary-contrast">
            Instituto Federal do Paraná
          </p>
          <p className="text-sm text-secondary-contrast">Março/2024</p>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-sm text-secondary-contrast">Experiência</h3>
          <h2 className="text-lg font-semibold text-primary-contrast">
            Estagiário Administrativo
          </h2>
          <p className="text-sm text-secondary-contrast">
            Corpo de Bombeiros de Umuarama
          </p>
          <p className="text-sm text-secondary-contrast">
            Julho/2022 - Dezembro/2023
          </p>
          <p className="p-2 text-xs text-secondary-contrast text-justify">
            Edição de planilhas, lançamento de dados no sistema, controle de
            orçamentos, gerenciamento de licitações
          </p>
        </div>
      </div>
      <h1 className="text-primary dark:text-primary-contrast text-xl font-bold text-center mb-4">
        Competências
      </h1>
      <div className="bg-transparent sm:bg-dark p-2 rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h2 className="text-lg text-primary-contrast">HTML & CSS</h2>
          <h3 className="text-sm text-secondary-contrast font-semibold mb-2">
            Intermediário
          </h3>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h2 className="text-lg text-primary-contrast">PHP</h2>
          <h3 className="text-sm text-secondary-contrast font-semibold mb-2">
            Intermediário
          </h3>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h2 className="text-lg text-primary-contrast">SQL</h2>
          <h3 className="text-sm text-secondary-contrast font-semibold mb-2">
            Intermediário
          </h3>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h2 className="text-lg text-primary-contrast">NextJS</h2>
          <h3 className="text-sm text-secondary-contrast font-semibold mb-2">
            Báscio
          </h3>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h2 className="text-lg text-primary-contrast">ReactJS</h2>
          <h3 className="text-sm text-secondary-contrast font-semibold mb-2">
            Báscio
          </h3>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h2 className="text-lg text-primary-contrast">Tailwind</h2>
          <h3 className="text-sm text-secondary-contrast font-semibold mb-2">
            Báscio
          </h3>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h2 className="text-lg text-primary-contrast">NodeJS</h2>
          <h3 className="text-sm text-secondary-contrast font-semibold mb-2">
            Báscio
          </h3>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h2 className="text-lg text-primary-contrast">Git</h2>
          <h3 className="text-sm text-secondary-contrast font-semibold mb-2">
            Básico
          </h3>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h2 className="text-lg text-primary-contrast">Inglês</h2>
          <h3 className="text-sm text-secondary-contrast font-semibold mb-2">
            Avançado
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
