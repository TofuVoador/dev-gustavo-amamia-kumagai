import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto mt-8 mb-16">
      <h1 className="text-neutral-light text-xl font-bold text-center mb-4">
        Contato
      </h1>
      <div className="bg-transparent sm:bg-dark p-2 rounded-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-lg mb-2">Whatsapp</h3>
          <a
            href="https://wa.me/5544988150190"
            className="text-green-400 text-md bg-transparent hover:bg-primary border-green-400 border-2 rounded-md p-1"
          >
            (44) 988150190
          </a>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-lg mb-2">GitHub</h3>
          <a
            href="https://github.com/TofuVoador"
            className="text-gray-400 text-md bg-transparent hover:bg-primary border-gray-400 border-2 rounded-md p-1"
          >
            @TofuVoador
          </a>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-xl mb-2">Email</h3>
          <a
            href="mailto:iagamuk.gus@gmail.com"
            className="text-red-400 bg-transparent hover:bg-primary border-red-400 border-2 rounded-md p-1"
          >
            iagamuk.gus@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
