import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4 px-6">
        <h1 className="text-2xl">Dashboard</h1>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-bold mb-4">Welcome to the Dashboard!</h2>
        <p>You are now logged in. Start exploring your features!</p>
      </main>
    </div>
  );
};

export default Dashboard;
