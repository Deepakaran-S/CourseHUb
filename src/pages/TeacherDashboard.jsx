import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BarChart3,
  Calendar,
  MessageCircle,
  Book,
  Users,
  Library,
  GraduationCap,
  ListChecks,
  HelpCircle,
  Settings,
  Moon,
  Menu,
  X
} from "lucide-react";

export default function TeacherDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Instructor Dashboard | CourseHub";
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row min-h-screen bg-[#f9fafe]"
    >
      {/* Mobile Header */}
      <header className="bg-white shadow-md md:hidden flex items-center justify-between px-4 py-3 z-30">
        <h1 className="text-lg font-bold text-blue-600">Dashboard</h1>
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="text-2xl text-gray-700" />
        </button>
      </header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-md p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-blue-600">CourseHub</h2>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
                <SidebarNav />
                <div className="mt-8">
                  <ToggleTheme />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-white shadow-md p-5 flex-col justify-between">
        <div>
         
          <SidebarNav />
          <div className="mt-8">
            <ToggleTheme />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 space-y-6 z-0">
        <h1 className="text-2xl font-bold">Welcome Back, Alexis 🎉</h1>
        <p className="text-gray-500 mb-4">Orci pulvinar. Lorem ipsum dolor sit amet consectetur.</p>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <StatCard title="New Students" value="2,543" percentage="+80%" />
          <StatCard title="Total Students" value="12,543" percentage="+80%" />
          <StatCard title="Total Income" value="$10,123" percentage="+80%" />
          <StatCard title="Working Hours" value="32h 42m" percentage="+80%" />
        </div>

        {/* Performance & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="col-span-1 lg:col-span-1 bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] rounded-xl p-4 md:p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm">Lecturer Performance</h3>
                <h1 className="text-2xl md:text-3xl font-bold mt-2">91.2%</h1>
                <p className="text-xs md:text-sm mt-1">Overall Performance Score</p>
              </div>
              <img
                src="https://i.postimg.cc/3Nmb2TRm/default-avatar.png"
                alt="Avatar"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
              />
            </div>
            <div className="mt-4 md:mt-6 text-xs md:text-sm">
              <p>
                <span className="font-semibold text-white">86%</span> — Your Lesson Planning Score increased by 25%
                from last month.
              </p>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-3 md:mb-4">Working Hours Statistics</h3>
            <div className="h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-md flex items-center justify-center text-sm text-gray-500">
              [Graph Placeholder]
            </div>
          </div>
        </div>

        {/* Agenda */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm w-full max-w-md">
          <h3 className="font-semibold mb-3 md:mb-4">My Agenda</h3>
          <ul className="space-y-2 text-xs md:text-sm">
            <li><strong>7:30 AM - 8:30 AM:</strong> Department Meetings</li>
            <li><strong>9:00 AM - 10:00 AM:</strong> Attending Conferences</li>
            <li><strong>10:30 AM - 11:30 AM:</strong> Course Coordination</li>
          </ul>
        </div>
      </main>
    </motion.div>
  );
}

function SidebarNav() {
  return (
    <nav className="space-y-3 text-sm">
      <SidebarItem icon={<Home size={18} />} label="Dashboard" active />
      <SidebarItem icon={<BarChart3 size={18} />} label="Analytics" />
      <SidebarItem icon={<Calendar size={18} />} label="Calendar" />
      <SidebarItem icon={<MessageCircle size={18} />} label="Messages" />
      <hr />
      <SidebarItem icon={<ListChecks size={18} />} label="Registration" />
      <SidebarItem icon={<Users size={18} />} label="Students" />
      <SidebarItem icon={<Library size={18} />} label="Library" />
      <SidebarItem icon={<Book size={18} />} label="Courses" />
      <SidebarItem icon={<GraduationCap size={18} />} label="Professors" />
      <SidebarItem icon={<BarChart3 size={18} />} label="Department" />
      <SidebarItem icon={<ListChecks size={18} />} label="Financial Record" />
      <hr />
      <SidebarItem icon={<HelpCircle size={18} />} label="Help & Center" />
      <SidebarItem icon={<Settings size={18} />} label="Settings" />
    </nav>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition cursor-pointer ${
        active ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {icon}
      <span className="inline">{label}</span>
    </div>
  );
}

function StatCard({ title, value, percentage }) {
  return (
    <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
      <h4 className="text-xs md:text-sm text-gray-500">{title}</h4>
      <h2 className="text-lg md:text-xl font-bold mt-1">{value}</h2>
      <p className="text-xs text-green-500">{percentage} Increase</p>
    </div>
  );
}

function ToggleTheme() {
  return (
    <button className="flex items-center gap-2 text-xs md:text-sm border border-gray-300 p-2 rounded hover:bg-gray-100 transition">
      <Moon size={16} />
      Dark Mode
    </button>
  );
}
