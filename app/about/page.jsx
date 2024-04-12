import React from "react";

const About = () => {
  const skills = [
    { title: "HTML & CSS", level: "Intermediário" },
    { title: "PHP", level: "Intermediário" },
    { title: "SQL", level: "Intermediário" },
    { title: "NextJS", level: "Básico" },
    { title: "ReactJS", level: "Básico" },
    { title: "Tailwind", level: "Básico" },
    { title: "NodeJS", level: "Básico" },
    { title: "Git", level: "Básico" },
    { title: "Inglês", level: "Avançado" },
  ];
  return (
    <section className="container mx-auto mt-32 mb-16">
      <h1 className="text-primary dark:text-primary-contrast text-xl font-bold text-center mb-4">
        Sobre
      </h1>
      <div className="bg-transparent mb-8 sm:bg-dark p-2 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-xs text-secondary-contrast">Formação</h3>
          <h2 className="text-xl font-semibold text-primary-contrast">
            Análise e Desenvolvimento de Sistemas
          </h2>
          <p className="text-md text-secondary-contrast">
            Instituto Federal do Paraná
          </p>
          <p className="text-md text-secondary-contrast">Março/2024</p>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-xs text-secondary-contrast">Experiência</h3>
          <h2 className="text-xl font-semibold text-primary-contrast">
            Estagiário Administrativo
          </h2>
          <p className="text-md text-secondary-contrast">
            Corpo de Bombeiros de Umuarama
          </p>
          <p className="text-md text-secondary-contrast">
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
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-secondary p-4 rounded-lg shadow-sm shadow-black"
          >
            <h2 className="text-lg text-primary-contrast font-semibold">
              {skill.title}
            </h2>
            <h3 className="text-sm text-secondary-contrast mb-2">
              {skill.level}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
