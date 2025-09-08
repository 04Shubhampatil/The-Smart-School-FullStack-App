import React from "react";
import axios from "axios";
import {
  User,
  Calendar,
  Award,
  Image,
  BookOpen,
  Send,
} from "lucide-react";

const TeacherAdmin = () => {
  async function handelsubmit(e) {
    e.preventDefault();

    let teacherData = {
      profilePic: e.target[0].value,
      name: e.target[1].value,
      age: e.target[2].value,
      exp: e.target[3].value,
    };

    try {
      let res = await axios.post("http://localhost:5500/api/teacher/add", teacherData);
      console.log(res.data);
            e.target.reset();

    } catch (error) {
      console.log(error, "API didn't");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <div className="flex items-center mb-4">
          <BookOpen className="text-purple-600 mr-2" size={26} />
          <h2 className="text-3xl font-bold text-purple-700">Teacher Admin</h2>
        </div>
        <p className="mb-6 text-gray-600">Manage All Teachers</p>

        <form onSubmit={handelsubmit} className="space-y-6">
          {/* Profile Pic */}
          <div>
            <div className="flex items-center mb-1">
              <Image className="text-gray-700 mr-2" size={18} />
              <label htmlFor="profilePic" className="font-medium text-gray-800">Profile Pic URL</label>
            </div>
            <input
              type="text"
              placeholder="https://image.url"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Name */}
          <div>
            <div className="flex items-center mb-1">
              <User className="text-gray-700 mr-2" size={18} />
              <label htmlFor="name" className="font-medium text-gray-800">Teacher Name</label>
            </div>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Age */}
          <div>
            <div className="flex items-center mb-1">
              <Calendar className="text-gray-700 mr-2" size={18} />
              <label htmlFor="age" className="font-medium text-gray-800">Enter Age</label>
            </div>
            <input
              type="number"
              placeholder="Enter Age"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center mb-1">
              <Award className="text-gray-700 mr-2" size={18} />
              <label htmlFor="exp" className="font-medium text-gray-800">Enter Experience</label>
            </div>
            <input
              type="number"
              placeholder="Enter Experience"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            <Send className="mr-2" size={18} />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherAdmin;
