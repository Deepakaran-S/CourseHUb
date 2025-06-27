import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaBookOpen, FaRocket } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <motion.section
        className="flex flex-col items-center text-center py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About CourseHub</h1>
        <p className="max-w-2xl text-lg">
          Empowering learners and teachers worldwide with seamless and interactive online learning.
        </p>
      </motion.section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Features
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎥',
                title: 'High‑Quality Video Lessons',
                desc: 'Engaging pre-recorded content from industry experts.',
              },
              {
                icon: '📝',
                title: 'Interactive Homework',
                desc: 'Stay on track with quizzes, projects, and feedback.',
              },
              {
                icon: '📊',
                title: 'Real‑Time Analytics',
                desc: 'Track your progress and performance over time.',
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-12"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet the Team
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Alice Smith', role: 'Founder & CEO', avatar: 'https://i.pravatar.cc/150?img=1' },
              { name: 'Bob Johnson', role: 'Lead Instructor', avatar: 'https://i.pravatar.cc/150?img=2' },
              { name: 'Carol Lee', role: 'UX Designer', avatar: 'https://i.pravatar.cc/150?img=3' },
              { name: 'David Kim', role: 'CTO', avatar: 'https://i.pravatar.cc/150?img=4' },
            ].map((m, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <img src={m.avatar} alt={m.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
                <h4 className="text-lg font-semibold">{m.name}</h4>
                <p className="text-gray-500">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision (replaces Contact) */}
      

<section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      className="text-3xl font-semibold mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      How It Works
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-10 text-left">
      {[
        {
          icon: <FaUserGraduate className="text-indigo-600 w-12 h-12 mb-4 mx-auto" />,
          title: '1. Create Your Account',
          desc: 'Sign up as a student or teacher and set up your profile in just a few clicks.',
        },
        {
          icon: <FaBookOpen className="text-indigo-600 w-12 h-12 mb-4 mx-auto" />,
          title: '2. Explore Courses',
          desc: 'Browse a wide variety of topics, preview content, and choose what fits you best.',
        },
        {
          icon: <FaRocket className="text-indigo-600 w-12 h-12 mb-4 mx-auto" />,
          title: '3. Learn & Grow',
          desc: 'Start learning with video lessons, assignments, and interactive discussions.',
        },
      ].map((step, i) => (
        <motion.div
          key={i}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          {step.icon}
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-600">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
}
