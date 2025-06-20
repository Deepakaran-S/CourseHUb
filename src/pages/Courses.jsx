import React, { useState } from 'react';

const coursesData = [
  {
    id: 1,
    title: "Full-Stack Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviews: "441,755",
    lectures: 374,
    hours: "61.5 total hours",
    level: "All Levels",
    price: "₹569",
    originalPrice: "₹3,219",
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
  },
  {
    id: 2,
    title: "Complete Web Development Course",
    instructor: "Hitesh Choudhary",
    rating: 4.6,
    reviews: "12,098",
    lectures: 231,
    hours: "79.5 total hours",
    level: "All Levels",
    price: "₹569",
    originalPrice: "₹3,199",
    image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
  },
  {
    id: 3,
    title: "Web Developer Bootcamp 2025",
    instructor: "Colt Steele",
    rating: 4.7,
    reviews: "281,363",
    lectures: 701,
    hours: "74 total hours",
    level: "All Levels",
    price: "₹609",
    originalPrice: "₹3,399",
    image: "https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",
  },
];

const Courses = () => {
  const [search, setSearch] = useState("");

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full md:w-1/2 p-3 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2 mt-4 md:mt-0">
          <select className="p-2 border rounded-md">
            <option>All Categories</option>
            <option>Web Development</option>
            <option>Design</option>
          </select>
          <select className="p-2 border rounded-md">
            <option>Sort By</option>
            <option>Highest Rated</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <img src={course.image} alt={course.title} className="rounded-md mb-3" />
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-sm text-gray-600">{course.instructor}</p>
            <div className="flex items-center text-sm mt-1">
              <span className="text-yellow-500 font-semibold">{course.rating}</span>
              <span className="ml-1 text-gray-500">({course.reviews} ratings)</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">{course.hours} • {course.lectures} lectures • {course.level}</div>
            <div className="mt-3">
              <span className="font-bold text-black">{course.price}</span>
              <span className="line-through text-gray-500 ml-2">{course.originalPrice}</span>
            </div>
            <button className="mt-3 w-full py-2 text-center bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
