// src/pages/Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [role, setRole] = useState('student');
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      login(data); // { user, token }

      const userRole = data.user.role;
      if (userRole === "teacher" || userRole === "instructor") {
        navigate("/teacher-dashboard");
      } else if (userRole === "student") {
        navigate("/student-dashboard");
      } else if (userRole === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      console.error("❌ Login error:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4ff] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <Link to="/" className="text-sm text-gray-500 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>

        <h2 className="text-2xl font-bold text-center mb-1">
          Welcome back to <span className="text-blue-600">CourseHub</span>
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to continue learning or teaching
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            className={`flex-1 border p-4 rounded-lg text-center ${role === 'student' ? 'border-black' : 'border-gray-300'}`}
            onClick={() => setRole('student')}
          >
            <span className="font-semibold">Student</span>
            <p className="text-xs text-gray-500">Continue learning</p>
          </button>
          <button
            type="button"
            className={`flex-1 border p-4 rounded-lg text-center ${role === 'instructor' ? 'border-black' : 'border-gray-300'}`}
            onClick={() => setRole('instructor')}
          >
            <span className="font-semibold">Instructor</span>
            <p className="text-xs text-gray-500">Access your dashboard</p>
          </button>
        </div>

        {error && (
          <div className="mb-4 text-sm text-red-500 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
