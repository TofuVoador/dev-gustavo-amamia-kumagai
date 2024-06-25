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
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
