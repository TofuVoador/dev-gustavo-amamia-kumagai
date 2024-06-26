import React from "react";

const About = () => {
  const certifications = [
    { title: "Design em CSS3", from: "CTEAD/IFPA", duration: "40 horas", date: "2022" },
    { title: "Edição de vídeo em projeto em LIBRAS", from: "NAPNE/IFPR", date: "2020" },
    { title: "Arduino Intermediário", from: "Senai", duration: "30 horas", date: "2019" },
    { title: "Arduino Básico", from: "Senai", duration: "20 horas", date: "2019" },
    { title: "Cambridge English B1", date: "2019" },
    {
      title: "Viagem a estudos para Londres",
      from: "Stafford House London",
      duration: "2 semanas",
      date: "2019",
    },
    { title: "Inglês", from: "CNA", date: "2018" },
    { title: "Olimpíada Brasileira de Física", duration: "Terceira fase", date: "2016" },
  ];

  const habilities = [
    { title: "HTML & CSS", level: "Intermediário" },
    { title: "JavaScript", level: "Intermediário" },
    { title: "PHP", level: "Intermediário" },
    { title: "SQL", level: "Intermediário" },
    { title: "NextJS", level: "Básico" },
    { title: "ReactJS", level: "Básico" },
    { title: "Tailwind", level: "Básico" },
    { title: "Git", level: "Básico" },
    { title: "Inglês", level: "Intermediário" },
    { title: "Criatividade" },
    { title: "Aprendizado rápido" },
    { title: "Proatividade" },
    { title: "Raciocínio Lógico" },
    { title: "Organização" },
  ];
  return (
    <section className="container mx-auto mt-32 mb-16">
      <h1 className="text-primary dark:text-white text-3xl font-bold text-center mb-4">
        Minha Jornada
      </h1>
      <div className="bg-transparent mb-8 sm:bg-secondary p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-primary text-white p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-xs">Graduação</h3>
          <h2 className="text-xl font-semibold">
            Tecnologia em Análise e Desenvolvimento de Sistemas
          </h2>
          <p className="text-sm">Instituto Federal do Paraná</p>
          <p className="text-sm">Março/2020 - Março/2024</p>
        </div>
        <div className="bg-primary text-white p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-xs">Experiência</h3>
          <h2 className="text-xl font-semibold">Estagiário Administrativo</h2>
          <p className="text-sm">Corpo de Bombeiros de Umuarama</p>
          <p className="text-sm">Julho/2022 - Dezembro/2023</p>
          <p className="p-2 text-xs text-secondary">
            Edição de planilhas, lançamento de dados no sistema, controle de orçamentos,
            gerenciamento de licitações
          </p>
        </div>
        <div className="bg-primary text-white p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-xs">Pós Graduação</h3>
          <h2 className="text-xl font-semibold">Engenharia de Software</h2>
          <p className="text-sm">Anhanguera</p>
          <p className="text-sm">Junho/2024 - Em Andamento</p>
        </div>
      </div>
      <h1 className="text-primary dark:text-white text-3xl font-bold text-center mb-4">
        Certificados
      </h1>
      <div className="bg-transparent mb-8 sm:bg-secondary p-4 rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {certifications.map((skill, index) => (
          <div key={index} className="bg-primary text-white p-4 rounded-lg shadow-sm shadow-black">
            <h3 className="text-xs">{skill.date}</h3>
            <h2 className="text-xl font-bold">{skill.title}</h2>
            <div className="text-sm mb-2">
              <h3>{skill.from}</h3>
              {skill.duration != null && <h3>{skill.duration}</h3>}
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-primary dark:text-white text-3xl font-bold text-center mb-4">
        Habilidades
      </h1>
      <div className="bg-transparent sm:bg-secondary p-4 rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {habilities.map((skill, index) => (
          <div key={index} className="bg-primary text-white p-4 rounded-lg shadow-sm shadow-black">
            <h2 className="text-xl font-bold">{skill.title}</h2>
            {skill.level != null && <h3 className="text-sm mb-2">{skill.level}</h3>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
