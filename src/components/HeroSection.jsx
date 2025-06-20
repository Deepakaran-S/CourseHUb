import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center min-h-screen justify-between px-6 md:px-20 py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden">

      {/* Animated background blob */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 z-0"
      />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 space-y-6 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Learn Smarter, <br />
          Grow Faster with <span className="text-blue-600">CourseHub</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Discover top-rated online courses from experts. Boost your skills, anytime, from anywhere.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/courses"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition"
          >
            Browse Courses
          </Link>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative md:w-1/2 mt-12 md:mt-0 z-10"
      >
        <img
          src="https://i.postimg.cc/mkWWxjrv/man-wearing-t-shirt-gesturing-removebg-preview.png"
          alt="Learning"
          className="w-full max-w mx-auto drop-shadow-xl rounded-xl"
        />

        {/* Floating Stat Bubbles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
          className="absolute top-6 left-4 bg-white shadow-md rounded-full px-4 py-2 flex items-center space-x-2"
        >
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="text-sm font-medium text-gray-700">5K+ Online Classes</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 120 }}
          className="absolute bottom-6 right-4 bg-white shadow-md rounded-full px-4 py-2 flex items-center space-x-2"
        >
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="text-sm font-medium text-gray-700">250K+ Online Tutors</div>
        </motion.div>
      </motion.div>

      {/* Stats at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-10 bg-white px-8 py-4 rounded-xl shadow-md z-10"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-600">1M+</h2>
          <p className="text-gray-600 text-sm">Learners</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-600">500+</h2>
          <p className="text-gray-600 text-sm">Top Instructors</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-600">98%</h2>
          <p className="text-gray-600 text-sm">Satisfaction Rate</p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce text-blue-600 text-2xl">
          ↓
        </div>
      </motion.div>
    </section>
  );
}
