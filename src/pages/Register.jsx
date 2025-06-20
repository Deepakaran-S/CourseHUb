import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, GraduationCap } from 'lucide-react';

export default function Register() {
  const [role, setRole] = useState('student');
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...form, role });
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4ff] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <Link to="/" className="text-sm text-gray-500 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>

        <h2 className="text-2xl font-bold text-center mb-1">Join <span className="text-blue-600">CourseHub</span></h2>
        <p className="text-center text-gray-500 mb-6 text-sm">Create your account and start learning today</p>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            className={`flex-1 border p-4 rounded-lg text-center ${
              role === 'student' ? 'border-black' : 'border-gray-300'
            }`}
            onClick={() => setRole('student')}
          >
            <User className="mx-auto mb-1" />
            <span className="font-semibold">Student</span>
            <p className="text-xs text-gray-500">Learn new skills</p>
          </button>
          <button
            type="button"
            className={`flex-1 border p-4 rounded-lg text-center ${
              role === 'instructor' ? 'border-black' : 'border-gray-300'
            }`}
            onClick={() => setRole('instructor')}
          >
            <GraduationCap className="mx-auto mb-1" />
            <span className="font-semibold">Instructor</span>
            <p className="text-xs text-gray-500">Teach others</p>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded"
              required
            />
          </div>
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
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded"
              required
            />
          </div>

          <label className="flex items-start text-sm gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
              required
            />
            I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </label>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
