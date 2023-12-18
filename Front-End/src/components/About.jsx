import React from "react";

function About() {
  return (
    <div className="max-w-[1150px] mx-auto text-center">
      <div className="my-8">
        <p className="text-4xl font-semibold uppercase">About the project</p>
      </div>
      <div className="w-[450px] mx-auto h-full bg-gray-400 p-8 rounded-lg">
      <p className="mb-4 " >
        I developed a comprehensive project, a Sample Storage App, using the
        MERN (MongoDB, Express.js, React.js, Node.js) stack.
      </p>
      <p className="mb-4">
        This application exhibits full CRUD functionality, allowing users to
        Create, Read, Update, and Delete storage entries.
      </p>
      <p className="mb-4">
        Leveraging React.js on the frontend, I designed an intuitive user
        interface for seamless navigation and data interaction.
      </p>
      <p className="mb-4">
        The backend, powered by Node.js and Express.js, communicates with a
        MongoDB database, ensuring efficient data storage and retrieval.
      </p>
      <p className="mb-4">
        The implementation of CRUD operations guarantees a dynamic user
        experience, enabling the management of stored data effortlessly. This
        MERN stack project showcases my proficiency in building robust,
        scalable, and feature-rich web applications.
      </p>
      </div>
    </div>
  );
}

export default About;
