import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: Log data to console (replace with API call for backend)
    console.log("Form Submitted:", formData);

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" });
    setSuccessMessage("Thank you! Your message has been send.");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      {successMessage && (
        <p className="text-green-500 text-sm text-center mb-4">{successMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
