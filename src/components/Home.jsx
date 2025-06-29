import React from "react";
import { GraduationCap, Book, User, LayoutDashboard } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-10 w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <LayoutDashboard className="text-purple-600 mr-2" size={28} />
          <h1 className="text-3xl font-bold text-purple-700">Welcome to Admin Dashboard</h1>
        </div>
        <p className="text-gray-600 mb-8">
          Manage Students, Teachers, and Courses from a single place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-indigo-100 rounded-xl p-4 shadow-md hover:shadow-lg transition">
            <User className="mx-auto text-indigo-600 mb-2" size={32} />
            <h3 className="font-semibold text-indigo-800">Teachers</h3>
            <p className="text-sm text-gray-600">Manage all instructors</p>
          </div>

          <div className="bg-purple-100 rounded-xl p-4 shadow-md hover:shadow-lg transition">
            <GraduationCap className="mx-auto text-purple-600 mb-2" size={32} />
            <h3 className="font-semibold text-purple-800">Students</h3>
            <p className="text-sm text-gray-600">Track and organize students</p>
          </div>

          <div className="bg-pink-100 rounded-xl p-4 shadow-md hover:shadow-lg transition">
            <Book className="mx-auto text-pink-600 mb-2" size={32} />
            <h3 className="font-semibold text-pink-800">Courses</h3>
            <p className="text-sm text-gray-600">Create and assign subjects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
