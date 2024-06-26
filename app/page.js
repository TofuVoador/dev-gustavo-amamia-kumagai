import React from "react";
import Projects from "./projects/page";
import About from "./about/page";
import Contact from "./contact/page";

const Home = () => {
  return (
    <>
      <section className="h-screen flex flex-col justify-center">
        <h1 className="text-primary dark:text-white text-2xl md:text-4xl font-bold text-center">
          Gustavo Amamia Kumagai
        </h1>
        <h2 className="text-primary dark:text-white text-lg md:text-2xl text-center">
          Analista de Sistemas
        </h2>
        <div className="container mx-auto mt-32 mb-16">
          <h2 className="bg-primary text-white text-sm rounded-lg text-justify py-2 px-4 m-4">
            Graduado em Análise e Desenvolvimento de Sistemas pelo IFPR Umuarama e cursando pós
            graduação em Engenharia de Software. Experiência prática como estagiário no Corpo de
            Bombeiros da Prefeitura Municipal de Umuarama, com destaque para o desenvolvimento de um
            sistema de verificação de materiais em veículos como parte do trabalho de conclusão de
            curso. Competente em HTML, CSS, JavaScript e PHP, com conhecimentos básicos em Next.js,
            React.js e Tailwind CSS. Inglês avançado, certificado pela Cambridge English, e
            experiência internacional em Londres.
          </h2>
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
