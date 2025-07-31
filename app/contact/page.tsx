// file: app/contact/page.tsx

"use client";

import { useState } from "react";
import AnimatedElement from "@/components/AnimatedElement";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validate = () => {
    /* ... (logika tidak berubah) ... */
  };
  const handleSubmit = async (e: React.FormEvent) => {
    /* ... (logika tidak berubah) ... */
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    /* ... (logika tidak berubah) ... */
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <AnimatedElement>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Contact Me</h1>
          <p className="text-lg text-gray-600 mt-2">
            Have a question or a job offer? Feel free to send a message.
          </p>
        </div>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          {submitMessage && (
            // Diubah dari green ke rose untuk tema marun
            <div className="mb-4 p-4 text-center text-rose-800 bg-rose-100 rounded-md">
              {submitMessage}
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                // Warna focus diubah ke rose
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-rose-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                // Warna focus diubah ke rose
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-rose-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone Number{" "}
              <span className="text-sm text-gray-500">(Optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              // Warna focus diubah ke rose
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-rose-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              // Warna focus diubah ke rose
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-rose-500"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            // Diubah dari green ke rose untuk tema marun
            className="w-full bg-rose-700 text-white font-bold py-3 px-4 rounded-md hover:bg-rose-800 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </AnimatedElement>
    </div>
  );
}
