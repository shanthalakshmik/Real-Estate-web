import React, { useState } from "react";

const ContactForm = ({ propertyId }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Inquiry sent successfully!");
  };

  return (
    <form className="bg-white p-4 shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-4">Contact Agent</h2>
      <input type="text" name="name" placeholder="shanthalakshmi" className="w-full mb-2 p-2 border" onChange={handleChange} />
      <input type="email" name="email" placeholder="santhalakshmi0423@gmail.com" className="w-full mb-2 p-2 border" onChange={handleChange} />
      <textarea name="message" placeholder="message type" className="w-full mb-2 p-2 border" rows="4" onChange={handleChange}></textarea>
      <button type="submit" className="bg-blue-600 text-white p-2 w-full">Send Inquiry</button>
    </form>
  );
};

export default ContactForm;
