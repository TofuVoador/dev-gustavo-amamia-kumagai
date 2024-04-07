import Card from "@/components/Card";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "1",
      desc: "1",
      dir: "1",
    },
    {
      title: "2",
      desc: "2",
      dir: "2",
    },
  ];

  return (
    <section className="container mx-auto mt-8 mb-16">
      <h1 className="text-3xl font-bold text-center mb-4">Projetos</h1>
      <div className="bg-dark p-2 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <Card title={project.title} desc={project.desc} dir={project.dir} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
