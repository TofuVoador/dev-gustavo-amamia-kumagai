import React from "react";

const About = () => {
  const skills = [
    {
      title: "1",
      desc: "1",
    },
    {
      title: "2",
      desc: "2",
    },
  ];

  return (
    <section className="container mx-auto mt-8">
      <h1 className="text-neutral-light text-xl sm:text-3xl font-bold text-center mb-4">
        Sobre
      </h1>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <h2 className="text-xl text-primary-contrast font-semibold mb-2">
          Formação
        </h2>
        <ul className="list-disc text-secondary-contrast pl-6">
          <li>
            <a href="/about/1" className="hover:text-contrast">
              Análise e Desenvolvimento de Sistemas - IFPR (Mar/2024)
            </a>
          </li>
        </ul>
        <h2 className="text-xl text-primary-contrast font-semibold mt-4 mb-2">
          Experiência
        </h2>
        <ul className="list-disc text-secondary-contrast pl-6">
          <li>
            <a href="/about/1" className="hover:text-contrast">
              Estagiário - Corpo de Bombeiros de (Jul/2022 - Dez/2023)
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-secondary p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-xl text-primary-contrast font-semibold mb-2">
          Competências
        </h2>
        <ul className="list-disc text-secondary-contrast pl-6">
          {skills.map((project) => (
            <li className="mb-2">
              <h1>{project.title}</h1>
              <p className="ml-4">{project.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
