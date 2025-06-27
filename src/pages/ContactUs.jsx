import React from 'react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-xl mx-auto">
          Got questions or feedback? We’d love to hear from you.
        </p>
      </motion.section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-md"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Reach us at</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                 <strong>Email:</strong> support@coursehub.com
              </li>
              <li>
                 <strong>Phone:</strong> +91 98765 43210
              </li>
              <li>
                 <strong>Address:</strong> 123 EdTech Lane, Chennai, TN, India
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Follow us:</h3>
              <div className="flex gap-4 text-xl">
                <a href="#" className="hover:text-indigo-600">🔗 LinkedIn</a>
                <a href="#" className="hover:text-indigo-600">📘 Facebook</a>
                <a href="#" className="hover:text-indigo-600">📷 Instagram</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map or Image Placeholder */}
      <motion.section
        className="px-4 pb-16"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            {/* Replace with live map embed if needed */}
            <iframe
              className="w-full h-full"
              title="CourseHub Location"
              src="https://maps.google.com/maps?q=Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.section>

    
      
    </div>
  );
}
