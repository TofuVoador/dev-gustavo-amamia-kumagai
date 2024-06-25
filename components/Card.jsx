import React from "react";

const Card = (props) => {
  const { title, description, tags, link, actionCall } = props;
  return (
    <div className="bg-primary p-4 rounded-lg shadow-sm shadow-black">
      <div className="text-xs text-white flex gap-1 mb-1">
        {tags.map((tag) => (
          <p key={title + tag} className="bg-secondary px-1 py-0.5 text-center rounded-sm">
            {tag}
          </p>
        ))}
      </div>
      <h2 className="text-white text-2xl font-semibold">{title}</h2>
      <p className="text-md text-secondary mb-2">{description}</p>
      {link != null && (
        <a
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="text-xs bg-white text-primary px-2 py-1 text-center rounded-md hover:bg-secondary hover:cursor-pointer float-end"
        >
          {actionCall != null ? actionCall : "Mais Informações"}
        </a>
      )}
    </div>
  );
};

export default Card;
