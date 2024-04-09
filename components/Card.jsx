import React from "react";

const Card = (props) => {
  const { title, description, tags, link, actionCall } = props;
  return (
    <div className="bg-secondary p-4 rounded-lg shadow-sm shadow-black">
      <p className="text-xs text-secondary flex gap-1 mb-1">
        {tags.map((tag) => (
          <spam className="bg-secondary-contrast p-1 rounded-md">{tag}</spam>
        ))}
      </p>
      <h2 className="text-primary-contrast text-2xl font-semibold">{title}</h2>
      <p className="text-sm text-secondary-contrast mb-2">{description}</p>
      {link != null && (
        <a
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="bg-primary-contrast text-primary p-1 rounded-md hover:bg-secondary-contrast float-end"
        >
          {actionCall != null ? actionCall : "Mais Informações"}
        </a>
      )}
    </div>
  );
};

export default Card;
