import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Agents = () => {
  // Sample agents
  const agents = [
    { id: 1, name: "Shantha Lakshmi", email: "santha@gmail.com", phone: "6085611828" },
    { id: 2, name: "Priya", email: "priya@gmail.com", phone: "098-765-4321" },
  ];

  return (
    <div>
      <Navbar />
      <main className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-6">Our Agents</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold">{agent.name}</h3>
              <p>Email: {agent.email}</p>
              <p>Phone: {agent.phone}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agents;

