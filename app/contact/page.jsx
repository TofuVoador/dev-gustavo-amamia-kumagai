"use client";
import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto mt-32 mb-16">
      <h1 className="text-primary dark:text-primary-contrast text-xl font-bold text-center mb-4">
        Contato
      </h1>
      <div className="bg-transparent sm:bg-dark p-2 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-lg text-primary-contrast mb-2">Whatsapp</h3>
          <a
            onClick={() => {
              window.open("https://wa.me/5544988150190", "_blank");
            }}
            className="text-green-400 text-sm bg-transparent hover:bg-primary border-green-400 border-2 rounded-md px-2 py-1"
          >
            (44) 988150190
          </a>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-lg text-primary-contrast mb-2">GitHub</h3>
          <a
            onClick={() => {
              window.open("https://github.com/TofuVoador", "_blank");
            }}
            className="text-gray-400 text-sm bg-transparent hover:bg-primary border-gray-400 border-2 rounded-md px-2 py-1"
          >
            @TofuVoador
          </a>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
          <h3 className="text-lg text-primary-contrast mb-2">Email</h3>
          <a
            onClick={() => {
              navigator.clipboard.writeText("iagamuk.gus@gmail.com");
              alert("Email Copiado!");
            }}
            className="text-red-400 text-sm bg-transparent hover:bg-primary border-red-400 border-2 rounded-md px-2 py-1"
          >
            iagamuk.gus@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
