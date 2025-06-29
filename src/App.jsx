import React from "react";
import { BrowserRouter, Route, Routes, Link, useLocation } from "react-router-dom";
import {
  Home as HomeIcon,
  Book,
  User,
  GraduationCap,
} from "lucide-react";

import TeacherAdmin from "./components/TeacherAdmin.jsx";
import StudentAdmin from "./components/StudentAdmin.jsx";
import CourseAdmin from "./components/CourseAdmin.jsx";
import Home from "./components/Home.jsx";

// Reusable NavLink with active style
const NavLink = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 p-3 rounded-md transition-all duration-200
        ${isActive ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow" : "hover:bg-blue-100 text-gray-700"}
      `}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
};

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-indigo-100 to-purple-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-tr-3xl rounded-br-3xl shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-purple-600 mb-8 text-center">Admin Panel</h1>
          <nav className="space-y-3">
            <NavLink to="/" icon={HomeIcon} label="Home" />
            <NavLink to="/teacher" icon={User} label="Teacher" />
            <NavLink to="/student" icon={GraduationCap} label="Student" />
            <NavLink to="/course" icon={Book} label="Course" />
          </nav>
        </div>
        <p className="text-xs text-gray-400 text-center mt-6">&copy; 2025 EduManage</p>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherAdmin />} />
          <Route path="/student" element={<StudentAdmin />} />
          <Route path="/course" element={<CourseAdmin />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
