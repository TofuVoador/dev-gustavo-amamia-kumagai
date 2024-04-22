import React from "react";

const Card = (props) => {
  const { title, description, tags, link, actionCall } = props;
  return (
    <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
      <div className="text-xs text-secondary flex gap-1 mb-1">
        {tags.map((tag) => (
          <p key={title + tag} className="bg-secondary-contrast px-1 py-0.5 text-center rounded-sm">
            {tag}
          </p>
        ))}
      </div>
      <h2 className="text-primary-contrast text-2xl font-semibold">{title}</h2>
      <p className="text-md text-secondary-contrast mb-2">{description}</p>
      {link != null && (
        <a
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="text-xs bg-primary-contrast text-primary px-2 py-1 text-center rounded-md hover:bg-secondary-contrast float-end"
        >
          {actionCall != null ? actionCall : "Mais Informações"}
        </a>
      )}
    </div>
  );
};

export default Card;
