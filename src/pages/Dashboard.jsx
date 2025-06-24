import React, { useState } from "react";
import {
  FiBookOpen,
  FiClock,
  FiAward,
  FiTrendingUp,
  FiSearch,
  FiCalendar,
  FiHome,
  FiUser,
  FiLayers,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// === Sidebar Item ===
const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer transition ${
      active
        ? "bg-indigo-100 text-indigo-700 font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`}
  >
    {icon}
    <span className="inline">{label}</span>
  </div>
);

// === Stat Card ===
const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4 w-full">
    <div className="text-indigo-600 text-2xl">{icon}</div>
    <div>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  </div>
);

// === Course Progress Card ===
const CourseProgressCard = ({ title, progress, timeLeft, img }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4 items-center">
    <img src={img} alt={title} className="w-full sm:w-16 h-32 sm:h-16 rounded-lg object-cover" />
    <div className="flex-1 w-full">
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
    <button className="bg-gray-900 text-white px-3 py-1 text-sm rounded w-full sm:w-auto">
      Continue
    </button>
  </div>
);

// === Suggested Course Card ===
const SuggestedCourseCard = ({ title, instructor, img }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full">
    <img src={img} alt={title} className="h-32 w-full object-cover" />
    <div className="p-3">
      <div className="font-medium text-sm">{title}</div>
      <div className="text-xs text-gray-500">by {instructor}</div>
    </div>
  </div>
);

// === Quick Action Item ===
const ActionItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 py-2 border-b last:border-none">
    <div className="text-lg text-indigo-600">{icon}</div>
    <div className="text-sm">{label}</div>
  </div>
);

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row relative">
      {/* Mobile Header */}
      <header className="bg-white shadow-md md:hidden flex items-center justify-between px-4 py-3 z-30">
        <h1 className="text-lg font-bold">Dashboard</h1>
        <button onClick={() => setSidebarOpen(true)}>
          <FiMenu className="text-2xl text-gray-700" />
        </button>
      </header>

      {/* Sidebar Overlay (Mobile) */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Dim Background */}
            <motion.div
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar Panel */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-md p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between mb-4">
                  <h2 className="font-semibold text-lg">Menu</h2>
                  <button onClick={() => setSidebarOpen(false)}>
                    <FiX className="text-xl" />
                  </button>
                </div>
                <nav className="space-y-2">
                  <SidebarItem icon={<FiHome />} label="Dashboard" active />
                  <SidebarItem icon={<FiBookOpen />} label="My Courses" />
                  <SidebarItem icon={<FiLayers />} label="Categories" />
                  <SidebarItem icon={<FiClock />} label="Progress Tracker" />
                  <SidebarItem icon={<FiAward />} label="Certificates" />
                  <SidebarItem icon={<FiUser />} label="Profile" />
                  <SidebarItem icon={<FiSettings />} label="Settings" />
                  <SidebarItem icon={<FiHelpCircle />} label="Help & Support" />
                </nav>
              </div>
              <SidebarItem icon={<FiLogOut />} label="Logout" />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-white shadow-md p-5 flex-col justify-between">
        <div>
          <nav className="space-y-2">
            <SidebarItem icon={<FiHome />} label="Dashboard" active />
            <SidebarItem icon={<FiBookOpen />} label="My Courses" />
            <SidebarItem icon={<FiLayers />} label="Categories" />
            <SidebarItem icon={<FiClock />} label="Progress Tracker" />
            <SidebarItem icon={<FiAward />} label="Certificates" />
            <SidebarItem icon={<FiUser />} label="Profile" />
            <SidebarItem icon={<FiSettings />} label="Settings" />
            <SidebarItem icon={<FiHelpCircle />} label="Help & Support" />
          </nav>
        </div>
        <SidebarItem icon={<FiLogOut />} label="Logout" />
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-4 sm:p-6 text-gray-900 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-gray-500 mb-6 text-sm sm:text-base">
          Continue your learning journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={<FiBookOpen />} label="Enrolled Courses" value="8" />
          <StatCard icon={<FiClock />} label="Hours Learned" value="124" />
          <StatCard icon={<FiAward />} label="Certificates" value="3" />
          <StatCard icon={<FiTrendingUp />} label="Streak Days" value="15" />
        </div>

        <div className="mt-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Continue Learning
          </h2>
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

        <div className="mt-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            What to Learn Next
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <ActionItem icon={<FiSearch />} label="Browse Courses" />
            <ActionItem icon={<FiAward />} label="View Certificates" />
            <ActionItem icon={<FiCalendar />} label="Learning Schedule" />
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
            <FiTrendingUp className="text-yellow-500 text-4xl mb-2" />
            <h3 className="font-semibold text-lg">Learning Streak!</h3>
            <p className="text-sm text-gray-500">15 days in a row</p>
          </div>
        </div>
      </main>
    </div>
  );
}
