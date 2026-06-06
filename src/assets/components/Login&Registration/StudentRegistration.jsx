import React from "react";

const StudentRegistration = ({ close }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white p-6 rounded-xl w-[500px] max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
          onClick={close}>
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-fuchsia-600">
          Student Registration
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
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

          <div>
            <label className="block mb-1 font-medium">College</label>
            <input
              type="text"
              placeholder="College Name"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Branch</label>
            <input
              type="text"
              placeholder="CSE, IT, ECE..."
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">LinkedIn URL</label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/..."
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">GitHub URL</label>
            <input
              type="url"
              placeholder="https://github.com/..."
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Resume Upload</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full border rounded-md px-3 py-2"
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
              onClick={close}
              className="bg-gray-300 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-400">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
