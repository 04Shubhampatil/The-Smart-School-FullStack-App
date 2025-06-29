import React from "react";
import axios from "axios";
import { User, Calendar, Award, Image, BookOpen, Send,BookOpenText  } from "lucide-react";

const StudentAdmin = () => {
  const [corse, setCorse] = React.useState([]); // ✅ FIXED

  React.useEffect(() => {
    async function getTeachers() {
      try {
        const res = await axios.get("http://localhost:5500/api/course/getList");
        setCorse(res.data);
      } catch (error) {
        console.log(error, "API didn't work");
      }
    }
    getTeachers();
  }, []);

  async function handelsubmit(e) {
    e.preventDefault();

    const studentData = {
      profilePic: e.target[0].value,
      name: e.target[1].value,
      age: e.target[2].value,
      grade: e.target[3].value,
      courseId: e.target[4].value,
    };

    try {
      const res = await axios.post("http://localhost:5500/api/student/add", studentData);
      console.log(res.data);
    } catch (error) {
      console.log(error, "API didn't work");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <div className="flex items-center mb-4">
          <BookOpen className="text-purple-600 mr-2" size={26} />
          <h2 className="text-3xl font-bold text-purple-700">Student Admin</h2>
        </div>
        <p className="mb-6 text-gray-600">Manage All Students</p>

        <form onSubmit={handelsubmit} className="space-y-6">
          {/* Profile Pic */}
          <div>
            <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
              <Image size={18} /> Profile Pic URL
            </label>
            <input
              type="text"
              placeholder="Enter profile pic"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
              <User size={18} /> Student Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Age */}
          <div>
            <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
              <Calendar size={18} /> Student Age
            </label>
            <input
              type="number"
              placeholder="Enter Age"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Grade */}
          <div>
            <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
              <Award size={18} /> Student Grade
            </label>
            <input
              type="number"
              placeholder="Enter Grade"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* corse Select */}
          <div>
            <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
              <BookOpenText  size={18} /> Assign course
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="" disabled selected>-- Select a corse --</option>
              {corse.map((t) => (
                <option key={t._id} value={t._id}>{t.courseName}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            <Send size={18} />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentAdmin;
