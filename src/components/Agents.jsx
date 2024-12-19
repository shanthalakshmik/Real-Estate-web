import React from "react";

const Agents = () => {
  const agents = [
    {
      id: "1",
      name: "John Doe",
      designation: "Senior Agent",
      contact: "+1 234 567 890",
      image: "/images/agent1.jpg", // Replace with actual agent images
    },
    {
      id: "2",
      name: "Jane Smith",
      designation: "Real Estate Specialist",
      contact: "+1 987 654 321",
      image: "/images/agent2.jpg",
    },
    {
      id: "3",
      name: "Emily Johnson",
      designation: "Luxury Properties Expert",
      contact: "+1 456 789 123",
      image: "/images/agent3.jpg",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: "url('/images/agents-bg.jpg')" }} // Replace with your background image
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-8">Our Trusted Agents</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all"
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-black">
                <h2 className="text-xl font-bold">{agent.name}</h2>
                <p className="text-sm text-gray-500">{agent.designation}</p>
                <p className="mt-2 font-semibold text-gray-700">{agent.contact}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Contact Agent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
