"use client";
import React, { useState } from "react";

const Section3: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data being sent:", formData); // Log the form data being sent

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      let errorData;
      try {
        errorData = await response.json();
      } catch (err) {
        errorData = { message: "Unknown error occurred" };
      }
      console.error("Error response:", errorData); // Log the error response
      alert("Failed to send message.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-graish justify-center items-center lg:px-60 text-center p-8 w-full space-y-4"
      >
        <h2 className="text-yellow-500 text-2xl font-bold mb-2">Contact</h2>
        <p className="text-white mb-4">Let Us Know How We Can Help</p>
        <div className="grid lg:grid-cols-2 gap-4">
          <input
            className="p-2 border border-gray-200 bg-graish text-gray-200 rounded"
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 border border-gray-200 bg-graish text-gray-200 rounded"
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          className="p-2 border border-gray-200 bg-graish text-gray-200 rounded w-full"
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border border-gray-200 bg-graish text-gray-200 rounded w-full"
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          className="p-2 border border-gray-200 bg-graish text-gray-200 rounded w-full"
          type="text"
          name="subject"
          placeholder="Organization/Business/Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          className="p-2 border border-gray-200 bg-graish text-gray-200 rounded w-full"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        />
        <button
          className="bg-customYellow  text-gray-900 py-2 px-4 rounded  w-[300px]"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Section3;
