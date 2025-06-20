import { motion } from 'framer-motion';

const instructors = [
  {
    name: 'Arjun Iyer',
    title: 'Full Stack Developer',
    avatar: 'https://i.pravatar.cc/150?img=12',
    tagline: '10+ years experience in React & Node.js',
  },
  {
    name: 'Priya Deshmukh',
    title: 'UI/UX Designer',
    avatar: 'https://i.pravatar.cc/150?img=32',
    tagline: 'Lead designer at a top SaaS startup',
  },
  {
    name: 'Rahul Menon',
    title: 'Data Scientist',
    avatar: 'https://i.pravatar.cc/150?img=41',
    tagline: 'Ex-Google ML Engineer',
  },
  {
    name: 'Sneha Patil',
    title: 'Digital Marketer',
    avatar: 'https://i.pravatar.cc/150?img=20',
    tagline: 'Helped scale 100+ brands',
  },
];

export default function InstructorShowcase() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Top Instructors</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Learn from industry professionals with real-world experience.
        </p>
      </div>

      <motion.div
        className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-10 md:overflow-visible"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {instructors.map((ins, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-xl shadow-md min-w-[250px] flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={ins.avatar}
              alt={ins.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{ins.name}</h3>
            <p className="text-blue-600 text-sm">{ins.title}</p>
            <p className="text-gray-600 text-sm mt-2">{ins.tagline}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
