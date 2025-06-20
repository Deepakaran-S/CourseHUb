import React from "react";
import {
  FiBookOpen,
  FiClock,
  FiAward,
  FiTrendingUp,
  FiSearch,
  FiCalendar,
} from "react-icons/fi";
import { motion } from "framer-motion";

// Reusable Stat Card
const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
    <div className="text-indigo-600 text-2xl">{icon}</div>
    <div>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  </div>
);

// Continue Learning Card
const CourseProgressCard = ({ title, progress, timeLeft, img }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4 items-center">
    <img
      src={img}
      alt={title}
      className="w-16 h-16 rounded-lg object-cover"
    />
    <div className="flex-1">
      <div className="font-semibold text-sm">{title}</div>
      <div className="w-full bg-gray-200 h-2 rounded mt-2">
        <div
          className="bg-indigo-600 h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-500 mt-1">
        {timeLeft} • {progress}%
      </div>
    </div>
    <button className="bg-gray-900 text-white px-3 py-1 text-sm rounded">
      Continue
    </button>
  </div>
);

// Suggested Course Card
const SuggestedCourseCard = ({ title, instructor, img }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <img src={img} alt={title} className="h-32 w-full object-cover" />
    <div className="p-3">
      <div className="font-medium text-sm">{title}</div>
      <div className="text-xs text-gray-500">by {instructor}</div>
    </div>
  </div>
);

// Action Item
const ActionItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 py-2 border-b last:border-none">
    <div className="text-lg text-indigo-600">{icon}</div>
    <div className="text-sm">{label}</div>
  </div>
);

// Main Dashboard Component
export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-900">
      <h1 className="text-3xl font-bold">Welcome back, John!</h1>
      <p className="text-gray-500 mb-6">Continue your learning journey</p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={<FiBookOpen />} label="Enrolled Courses" value="8" />
        <StatCard icon={<FiClock />} label="Hours Learned" value="124" />
        <StatCard icon={<FiAward />} label="Certificates" value="3" />
        <StatCard icon={<FiTrendingUp />} label="Streak Days" value="15" />
      </div>

      {/* Continue Learning */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CourseProgressCard
            title="Complete Web Development Bootcamp"
            progress={65}
            timeLeft="12 hours left"
            img="/web.jpg"
          />
          <CourseProgressCard
            title="UI/UX Design Masterclass"
            progress={30}
            timeLeft="18 hours left"
            img="/design.jpg"
          />
        </div>
      </div>

      {/* What Next */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">What to Learn Next</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SuggestedCourseCard
            title="React Basics"
            instructor="Emma Brown"
            img="/react.jpg"
          />
          <SuggestedCourseCard
            title="Node.js Crash Course"
            instructor="Liam Carter"
            img="/node.jpg"
          />
          <SuggestedCourseCard
            title="Figma Pro Tips"
            instructor="Sophie Lee"
            img="/figma.jpg"
          />
        </div>
      </div>

      {/* Quick Actions + Achievement */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <ActionItem icon={<FiSearch />} label="Browse Courses" />
          <ActionItem icon={<FiAward />} label="View Certificates" />
          <ActionItem icon={<FiCalendar />} label="Learning Schedule" />
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center justify-center">
          <FiTrendingUp className="text-yellow-500 text-4xl mb-2" />
          <h3 className="font-semibold text-lg">Learning Streak!</h3>
          <p className="text-sm text-gray-500">15 days in a row</p>
        </div>
      </div>
    </div>
  );
}
