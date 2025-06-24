import React from 'react';
import { Link } from 'react-router-dom';

const mockUser = {
  name: 'Jean Blunt',
  username: 'jean_blunt',
  location: 'South Jakarta',
  role: 'Visual Designer/Product Designer',
  website: 'jeanblunt.com/project',
  avatar: '/avatar.png', // put your local image or public url
  socials: {
    email: '#',
    linkedin: '#',
    instagram: '#',
    dribbble: '#',
  },
  enrolledCourses: [
    {
      id: 1,
      title: 'Advanced Motion Graphics in After Effects',
      image: '/courses/motion.png',
      instructor: 'Dane Horne',
      rating: 4.7,
      enrolled: 6502,
    },
    {
      id: 2,
      title: 'UI UX Mastery with Figma',
      image: '/courses/figma.png',
      instructor: 'Rhea Kim',
      rating: 4.6,
      enrolled: 4320,
    },
  ],
  skills: ['UI/UX', 'Design', 'Prototype'],
};

const Profile = () => {
  const { name, username, location, role, website, avatar, socials, enrolledCourses, skills } = mockUser;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-white to-pink-100 p-4 md:p-10">
      {/* Profile Header */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="relative">
              <img src={avatar} alt={name} className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" />
            </div>
            <h2 className="text-xl font-semibold mt-4">{name}</h2>
            <p className="text-gray-500">@{username}</p>
            <p className="text-sm mt-1">{location}</p>
            <p className="text-sm text-center mt-1">{role}</p>
            <a href={website} className="text-indigo-500 text-sm mt-1 underline">{website}</a>

            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              <a href={socials.email}><i className="fas fa-envelope text-lg text-blue-600" /></a>
              <a href={socials.linkedin}><i className="fab fa-linkedin text-lg text-blue-600" /></a>
              <a href={socials.instagram}><i className="fab fa-instagram text-lg text-pink-500" /></a>
              <a href={socials.dribbble}><i className="fab fa-dribbble text-lg text-purple-500" /></a>
            </div>

            {/* Follower Stats */}
            <div className="flex justify-between w-full mt-6 px-8">
              <div className="text-center">
                <p className="text-sm text-gray-400">Enrolled</p>
                <p className="font-bold text-md">{enrolledCourses.length}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Following</p>
                <p className="font-bold text-md">120</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3">
            {/* Enrolled Courses */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Your Enrolled Courses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {enrolledCourses.map(course => (
                  <div key={course.id} className="border rounded-lg p-3 shadow-sm hover:shadow-md transition">
                    <img src={course.image} alt={course.title} className="rounded-md mb-2 w-full h-40 object-cover" />
                    <h4 className="text-md font-semibold">{course.title}</h4>
                    <p className="text-sm text-gray-600">{course.instructor}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      ⭐ {course.rating} • {course.enrolled} students
                    </p>
                    <Link to={`/course/${course.id}`} className="text-indigo-600 text-sm mt-2 inline-block">
                      View Course →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-3">Recommendation</h3>
              <ul className="list-decimal list-inside text-sm text-gray-600 bg-gray-50 rounded-md p-4">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
