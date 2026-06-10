import React from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const navigate=useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white p-6 rounded-xl w-[400px] shadow-xl">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
          onClick={() => navigate("/")}>
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-fuchsia-600">
          Admin Login
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Admin Email</label>
            <input
              type="email"
              placeholder="admin@referralx.com"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              required
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="bg-fuchsia-500 text-white px-5 py-2 rounded-md hover:bg-fuchsia-600">
              Login
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-gray-300 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-400">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
