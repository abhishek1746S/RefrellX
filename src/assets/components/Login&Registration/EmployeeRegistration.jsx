import React from "react";

const EmployeeRegistration = ({ setShowEmployee }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white p-6 rounded-xl w-[500px] max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
          onClick={() => setShowEmployee(false)}>
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-fuchsia-600">
          Employee Registration
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Company Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Personal Email</label>
            <input
              type="email"
              placeholder="Enter personal email"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Company Name</label>
            <input
              type="text"
              placeholder="Google, Microsoft, Amazon..."
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Designation</label>
            <input
              type="text"
              placeholder="Software Engineer"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">LinkedIn Profile</label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/..."
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Employee ID (Optional)
            </label>
            <input
              type="text"
              placeholder="Employee ID"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="flex gap-3 pt-3">
            <button
              type="submit"
              className="bg-fuchsia-500 text-white px-5 py-2 rounded-md hover:bg-fuchsia-600">
              Register
            </button>

            <button
              type="button"
              onClick={() => setShowEmployee(false)}
              className="bg-gray-300 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-400">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRegistration;
