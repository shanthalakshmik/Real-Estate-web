import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
