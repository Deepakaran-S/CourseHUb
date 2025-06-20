import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-white text-center px-6 md:px-20 rounded-t-3xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to level up your skills?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join thousands of learners and start mastering new tech and tools today.
        </p>
        <Link
          to="/register"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition"
        >
          Subscribe Now
        </Link>
      </motion.div>
    </section>
  );
}
