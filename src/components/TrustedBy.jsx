import { motion } from 'framer-motion';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg',
  'https://i.postimg.cc/d3gBNNtC/coursera-logo-full-rgb.png',
  'https://i.postimg.cc/wxr0BMcB/Linked-In-Logo-wine.png',
  'https://i.postimg.cc/0yRnp44R/edx-logo-elm.png',
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Trusted by 100+ Institutions</h2>
        <p className="text-gray-500 mt-2">Our learning platform is recognized by top global brands</p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={logo} alt={`logo-${index}`} className="h-12 object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
