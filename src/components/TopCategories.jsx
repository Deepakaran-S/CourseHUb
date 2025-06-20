import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code,
  Palette,
  BarChart3,
  Brain,
  TrendingUp,
  Heart
} from 'lucide-react';

const categories = [
  { title: 'Web Development', icon: Code, path: '/courses?cat=web' },
  { title: 'UI/UX Design', icon: Palette, path: '/courses?cat=design' },
  { title: 'Data Science', icon: BarChart3, path: '/courses?cat=data' },
  { title: 'AI & ML', icon: Brain, path: '/courses?cat=ai' },
  { title: 'Business & Marketing', icon: TrendingUp, path: '/courses?cat=business' },
  { title: 'Personal Growth', icon: Heart, path: '/courses?cat=personal' },
];

export default function TopCategories() {
  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Explore Top Categories
        </motion.h2>
        <p className="text-gray-500 mt-4 text-lg">
          Pick a skill and start learning with expert-led courses
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-gray-50 hover:bg-blue-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4">
                <Icon className="w-10 h-10 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                  <Link
                    to={category.path}
                    className="text-blue-500 hover:underline text-sm mt-1 inline-block"
                  >
                    View Courses →
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
