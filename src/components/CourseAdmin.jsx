import React from "react";
import axios from "axios";
import { BookOpen, Image, StickyNote, Type, Send, User } from "lucide-react";

const CourseAdmin = () => {
  const [teacher, setTeacher] = React.useState([]);

  React.useEffect(() => {
    async function getTeachers() {
      try {
        const res = await axios.get(
          "http://localhost:5500/api/teacher/getList"
        );
        setTeacher(res.data);
      } catch (error) {
        console.log(error, "API didn't work");
      }
    }
    getTeachers();
  }, []);

  async function handelsubmit(e) {
    e.preventDefault();

    const Coursedata = {
      courseName: e.target[0].value,
      courseBanner: e.target[1].value,
      courseDiscription: e.target[2].value,
      teacherId: e.target[3].value,
    };

    try {
      const res = await axios.post(
        "http://localhost:5500/api/course/add",
        Coursedata
      );
      console.log(res.data);
      e.target.reset();
    } catch (error) {
      console.log(error, "API didn't work");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <div className="flex items-center mb-4">
          <BookOpen className="text-purple-600 mr-2" size={26} />
          <h2 className="text-3xl font-bold text-purple-700">Course Admin</h2>
        </div>
        <p className="mb-6 text-gray-600">Manage All Courses</p>

        <form onSubmit={handelsubmit} className="space-y-6">
          {/* Course Name */}
          <div>
            <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
              <Type size={18} /> Course Name
            </label>
            <input
              type="text"
              placeholder="Enter course name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Course Banner */}
          <div>
            <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
              <Image size={18} /> Course Banner URL
            </label>
            <input
              type="text"
              placeholder="Enter course banner URL"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Course Description */}
          <div>
            <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
              <StickyNote size={18} /> Course Description
            </label>
            <textarea
              placeholder="Enter course description"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
              rows={4}
            />
          </div>

          {/* Teacher Dropdown */}
          <div>
            <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
              <User size={18} /> Assign Teacher
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="" disabled selected>
                -- Select a Teacher --
              </option>
              {teacher.map((t) => (
                <option key={t._id} value={t._id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            <Send size={18} /> Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseAdmin;
