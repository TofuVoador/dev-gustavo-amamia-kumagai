import React from "react";

const Card = (props) => {
  const { title, dir, desc } = props;

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-inner shadow-dark">
      <h2 className="text-primary-contrast text-xl font-semibold mb-2">
        {title}
      </h2>
      {desc != null && <p className="text-secondary-contrast mb-2">{desc}</p>}
      {dir != null && (
        <a
          href={dir}
          className="bg-primary-contrast text-primary p-1 rounded-md"
        >
          Saiba Mais
        </a>
      )}
    </div>
  );
};

export default Card;
