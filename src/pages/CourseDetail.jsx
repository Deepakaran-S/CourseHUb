import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import { useCart } from "../context/CartContext";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const course = coursesData.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Course not found.
      </div>
    );
  }

  const handleEnroll = () => {
    addToCart(course);
    navigate("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-indigo-600 hover:underline mb-6"
      >
        ← Back to Courses
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <img
            src={course.image}
            alt={course.title}
            className="w-full rounded-lg mb-6"
          />

          <h1 className="text-3xl font-bold text-gray-800 mb-3">{course.title}</h1>
          <p className="text-sm text-gray-600 mb-2">Instructor: {course.instructor}</p>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="text-yellow-500 font-semibold">{course.rating}</span>
            <span className="ml-1">({course.reviews} reviews)</span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            This is a comprehensive course that teaches you everything from the basics to advanced topics in full-stack development. You'll learn React, Node.js, MongoDB, Express, and much more, with hands-on projects and real-world applications.
          </p>

          {/* What you'll learn */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What you'll learn</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Build full-stack applications using MERN stack</li>
              <li>Create responsive UI with React and Tailwind</li>
              <li>Manage databases with MongoDB</li>
              <li>Develop REST APIs with Node.js & Express</li>
              <li>Understand authentication and deployment</li>
            </ul>
          </div>

          {/* Syllabus */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Course Content</h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <div>📘 Introduction to Full-Stack Development</div>
              <div>⚛️ React Basics and Advanced Concepts</div>
              <div>📡 Node.js & Express - Backend APIs</div>
              <div>🗄️ MongoDB - Data Modeling</div>
              <div>🚀 Deploying Your App</div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md h-fit">
          <p className="text-3xl font-bold text-indigo-700 mb-6">
            ₹{course.price}
          </p>

          <ul className="text-sm text-gray-800 space-y-2 mb-6">
            <li><strong>Instructor:</strong> {course.instructor}</li>
            <li><strong>Duration:</strong> {course.hours}</li>
            <li><strong>Lectures:</strong> {course.lectures}</li>
            <li><strong>Level:</strong> {course.level}</li>
            <li><strong>Language:</strong> English</li>
            <li><strong>Certificate:</strong> Yes</li>
          </ul>

          <button
            onClick={handleEnroll}
            className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700"
          >
            Enroll Now
          </button>

          {/* Share Section */}
          <div className="mt-6 text-sm text-gray-600">
            <p className="mb-2 font-semibold">Share Course:</p>
            <div className="flex space-x-3">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
