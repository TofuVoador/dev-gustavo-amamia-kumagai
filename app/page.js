import React from "react";
import Projects from "./projects/page";
import About from "./about/page";
import Contact from "./contact/page";

const Home = () => {
  return (
    <>
      <section>
        <h1 className="text-primary-contrast text-2xl md:text-5xl font-bold text-center mb-4">
          Gustavo Amamia Kumagai
        </h1>
        <h2 className="text-primary-contrast text-lg md:text-2xl text-center mb-8">
          Desenvolvedor de Software
        </h2>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
