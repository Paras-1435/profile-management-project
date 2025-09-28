import React from "react";
import { Link } from "react-router-dom";
import dashboardImg from "../assets/dashboard.png"; // optional screenshot

function ProjectHome() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white flex flex-col">

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-zinc-700 to-zinc-900 text-white py-20 text-center rounded-b-3xl">
        <h1 className="text-5xl font-bold mb-4">User Management System</h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
          Create, edit, and delete user profiles easily. Built with React + Redux for state management and a responsive UI.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/users"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Users
          </Link>
          <Link
            to="/add-user"
            className="px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Add User
          </Link>
        </div>
      </header>

      {/* Optional Screenshot / Preview */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Preview</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform">
          <img
            src='image/prev.png'
            alt="Dashboard Preview"
            className="w-full h-80 object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            Create new user profiles
          </div>
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            Edit existing profiles
          </div>
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            Delete users
          </div>
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            Redux state management
          </div>
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            Responsive UI
          </div>
        </div>
      </section>

      {/* Footer / Back Link */}
      <footer className="py-12 text-center">
        <Link
          to="/"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Back to Portfolio
        </Link>
      </footer>
    </div>
  );
}

export default ProjectHome;
