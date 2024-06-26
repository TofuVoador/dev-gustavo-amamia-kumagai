import React from "react";

const Card = (props) => {
  const { title, description, tags, link, actionCall } = props;
  return (
    <div className="bg-primary text-white p-4 rounded-lg shadow-sm shadow-black">
      <div className="text-xs flex gap-1 mb-1">
        {tags.map((tag) => (
          <p key={title + tag} className="bg-secondary px-1 py-0.5 text-center rounded-sm">
            {tag}
          </p>
        ))}
      </div>
      <h2 className=" text-xl font-bold">{title}</h2>
      <p className="text-sm mb-2">{description}</p>
      {link != null && (
        <a
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="text-sm bg-white text-black px-1 py-0.5 text-center rounded-md hover:bg-secondary hover:cursor-pointer float-end"
        >
          {actionCall != null ? actionCall : "Mais Informações"}
        </a>
      )}
    </div>
  );
};

export default Card;
