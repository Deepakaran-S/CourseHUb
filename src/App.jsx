import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; // Student Dashboard
import Layout from './Layout';
import Courses from './pages/Courses';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import CourseDetail from './pages/CourseDetail';
import Profile from './pages/Profile';
import CreateCourse from './pages/CreateCourse';
import TeacherDashboard from './pages/TeacherDashboard';
import AboutUs from './pages/AboutUs';
import { Contact } from 'lucide-react';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 🧑‍🎓 Student Dashboard */}
          <Route path="/student-dashboard" element={<Dashboard />} />

          {/* 🧑‍🏫 Teacher Dashboard */}
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/create-course" element={<CreateCourse />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
