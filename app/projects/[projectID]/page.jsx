"use client";

import { useParams } from "next/navigation";
import React from "react";

const ProjectDetails = () => {
  const params = useParams();
  const { projectID } = params;

  return (
    <section className="container mx-auto mt-8 mb-16">
      <h1 className="text-3xl font-bold text-center mb-4">Project Details</h1>
      <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Project ID: {projectID}</h2>
        <p className="text-gray-700">Description of Project {projectID}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
