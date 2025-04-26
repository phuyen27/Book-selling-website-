import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    // Logic to send the message to a backend can go here
  };

  return (
    <section id="contact" className="bg-[#f8f9fa] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-8 text-lg">
          Have any questions or suggestions? We would love to hear from you!
        </p>

        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Office</h3>
            <p className="text-gray-600">123 Book Street, Fiction City, ABC 456</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">contact@bookstore.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+123 456 7890</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Write your message here"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
