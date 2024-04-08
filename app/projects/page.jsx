"use client";
import React from "react";

const Projects = () => {
  return (
    <section className="container mx-auto mt-32 mb-16">
      <h1 className="text-xl font-bold text-center mb-4">Projetos</h1>
      <div className="bg-transparent sm:bg-dark p-2 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <p className="text-sm text-secondary-contrast">React</p>
          <h2 className="text-primary-contrast text-lg font-semibold">
            Football Career Simulator
          </h2>
          <p className="text-sm text-secondary-contrast mb-2">
            Simulador de Carreira no Futebol
          </p>
          <a
            onClick={() => {
              window.open("https://football-career.vercel.app/", "_blank");
            }}
            className="bg-primary-contrast text-primary p-1 rounded-md hover:bg-secondary-contrast"
          >
            Jogar!
          </a>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <p className="text-sm text-secondary-contrast">PHP, HTML, SQL</p>
          <h2 className="text-primary-contrast text-xl font-semibold">
            Sischeck-BM
          </h2>
          <p className="text-sm text-secondary-contrast mb-2">
            Sistema de Checagem de Veículos para Corpo de Bombeiros
          </p>
          <a
            onClick={() => {
              window.open(
                "https://github.com/TofuVoador/sischeck-bm",
                "_blank"
              );
            }}
            className="bg-primary-contrast text-primary p-1 rounded-md hover:bg-secondary-contrast"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
