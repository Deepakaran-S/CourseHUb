import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aarav Sharma',
    avatar: 'https://i.pravatar.cc/150?img=3',
    feedback:
      'CourseHub helped me land a front-end dev job in 3 months! The structure and instructors were amazing.',
  },
  {
    name: 'Diya Mehta',
    avatar: 'https://i.pravatar.cc/150?img=5',
    feedback:
      'As a designer, I loved the UI/UX section. Clean content and real-world examples made learning fun.',
  },
  {
    name: 'Rahul Verma',
    avatar: 'https://i.pravatar.cc/150?img=7',
    feedback:
      'Courses are affordable and high quality. Perfect for upskilling while working full-time.',
  },
  {
    name: 'Sneha Raj',
    avatar: 'https://i.pravatar.cc/150?img=9',
    feedback:
      'I started with no coding experience. Now I can build real web apps. Thank you CourseHub!',
  },
];

// Duplicate array for seamless looping
const loopingTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Learners Say
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Real stories from learners around the world
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          {loopingTestimonials.map((user, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[320px] bg-white rounded-xl shadow-md p-6 flex-shrink-0"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{user.feedback}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
