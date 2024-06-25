"use client";
import Card from "@/components/Card";
import React from "react";

const Projects = () => {
  return (
    <section className="container mx-auto mt-32 mb-16">
      <h1 className="text-primary dark:text-white text-xl font-bold text-center mb-4">Projetos</h1>
      <div className="bg-transparent sm:bg-secondary p-2 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card
          title="Football Career Simulator"
          tags={["React", "JavaScript"]}
          description="Simulador de Carreira no Futebol"
          link="https://football-career.vercel.app/"
          actionCall="Jogar!"
        />
        <Card
          title="Sischeck-BM"
          tags={["PHP", "HTML", "SQL"]}
          description="Sistema de Checagem de Veículos para Corpo de Bombeiros"
          link="https://github.com/TofuVoador/sischeck-bm"
          actionCall="Github"
        />
        <Card
          title="Cities Data"
          tags={["Next", "API", "JavaScript"]}
          description="Busque informações sobre cidades e países"
          link="https://city-data-pi.vercel.app/"
          actionCall="Usar!"
        />
        <Card
          title="Task List"
          tags={["React", "JavaScript"]}
          description="Lista de Tarefas com Horários e Marcadores"
          link="https://react-task-list-ruddy.vercel.app/"
          actionCall="Usar!"
        />
      </div>
    </section>
  );
};

export default Projects;
