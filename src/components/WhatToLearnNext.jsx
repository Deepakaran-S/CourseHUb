import { motion } from 'framer-motion';

const suggestedCourses = [
  {
    id: 1,
    title: 'Advanced React & Performance',
    instructor: 'Jane Doe',
    image: 'https://source.unsplash.com/400x300/?react,code',
    description: 'Deep dive into React hooks, context, and performance optimization.',
  },
  {
    id: 2,
    title: 'Intro to Python for Data Science',
    instructor: 'Alex Smith',
    image: 'https://source.unsplash.com/400x300/?python,data',
    description: 'Get started with Python basics tailored for data science beginners.',
  },
  {
    id: 3,
    title: 'Figma UI/UX Crash Course',
    instructor: 'Ravi Kumar',
    image: 'https://source.unsplash.com/400x300/?ui,ux',
    description: 'Master Figma and design principles from wireframes to prototypes.',
  },
];

export default function WhatToLearnNext() {
  return (
    <motion.section
      className="mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-4">What to Learn Next</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {suggestedCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-2">by {course.instructor}</p>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-sm">
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
