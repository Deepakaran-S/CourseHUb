import React, { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import cardData from "../data/cardData.js"

const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("None");
  const { addToCart, cart } = useCart();

  // FILTERED + SORTED COURSES
  const filteredCourses = cardData
    .filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((course) => category === "All" || course.category === category)
    .sort((a, b) => {
      if (sort === "Highest Rated") return b.rating - a.rating;
      if (sort === "Lowest Price") return a.price - b.price;
      if (sort === "Highest Price") return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search + Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-1/2">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-3 border rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 items-center">
          <select
            className="p-2 border rounded-md text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Programming">Programming</option>
            <option value="Design">Design</option>
          </select>

          <select
            className="p-2 border rounded-md text-sm"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="None">Sort By</option>
            <option value="Highest Rated">Highest Rated</option>
            <option value="Lowest Price">Lowest Price</option>
            <option value="Highest Price">Highest Price</option>
          </select>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Course Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            {/* Link ONLY the course content, not the entire card */}
            <Link to={`/course/${course.id}`}>
              <img
                src={course.image}
                alt={course.title}
                className="rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.instructor}</p>
              <div className="flex items-center text-sm mt-1">
                <span className="text-yellow-500 font-semibold">
                  {course.rating}
                </span>
                <span className="ml-1 text-gray-500">
                  ({course.reviews} ratings)
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {course.hours} • {course.lectures} lectures • {course.level}
              </div>
              <div className="mt-3">
                <span className="font-bold text-black">₹{course.price}</span>
                <span className="line-through text-gray-500 ml-2">
                  ₹{course.originalPrice}
                </span>
              </div>
            </Link>

            {/* Add to Cart button should NOT be wrapped in <Link> */}
            <button
              onClick={() => addToCart(course)}
              className="mt-3 w-full py-2 text-center bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
