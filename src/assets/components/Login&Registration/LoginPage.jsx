import React, { useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======

>>>>>>> 96b1a3551045d0d62ae0f57978884a87fad8df38
const LoginPage = ({ setLogin,  setShowRegister, showRegister, setShowStudent,  setShowEmployee,}) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const navigate = useNavigate();
  const handleLogin = (e) => {
  e.preventDefault();

  if (
    email === "student@gmail.com" &&
    password === "123456"
  ) {
    setLogin(false);
    navigate("/student-dashboard");
  } else {
    alert("Invalid Email or Password");
  }
};
=======

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "student@gmail.com" &&
      password === "123456"
    ) {
      alert("login success")
      setLogin(false);
    } else {
      alert("Invalid Email or Password");
    }
  };
>>>>>>> 96b1a3551045d0d62ae0f57978884a87fad8df38

  return (
    <>
      {/* Login Modal */}
      {!showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white w-[400px] p-6 rounded-xl shadow-xl">

            {/* Close Button */}
            <button
              type="button"
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
              onClick={() => {
  setLogin(false);
}}
            >
              ×
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-center text-fuchsia-600 mb-6">
              Login
            </h2>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="email"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="password"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  required
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-fuchsia-500 text-white py-2 rounded-md hover:bg-fuchsia-600 transition"
                >
                  Login
                </button>

                <button
                  type="button"
                  onClick={() => setLogin(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              Don't have an account?

              <span
                className="text-fuchsia-500 cursor-pointer ml-1 hover:underline"
                onClick={() => {
                  setShowRegister(true);
                }}
              >
                Register
              </span>
            </p>

          </div>
        </div>
      )}

      {/* Register Role Modal */}
      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white w-[450px] p-8 rounded-xl shadow-xl">

            {/* Close Button */}
            <button
              type="button"
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
              onClick={() => setShowRegister(false)}
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold text-center text-fuchsia-600 mb-2">
              Choose Your Role
            </h2>

            <p className="text-center text-gray-500 mb-8">
              Select how you want to use ReferralX
            </p>

            <div className="flex gap-6">

              {/* Student */}
              <div
                onClick={() => {
                  setShowRegister(false);
                  setShowStudent(true);
                  setLogin(false);
                }}
                className="flex-1 cursor-pointer border rounded-xl p-6 text-center hover:border-fuchsia-500 hover:shadow-lg transition"
              >
                <span
                  className="material-symbols-outlined text-fuchsia-500"
                  style={{ fontSize: "50px" }}
                >
                  school
                </span>

                <h3 className="font-semibold mt-3">
                  Student
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Apply for referrals and grow your career
                </p>
              </div>

              {/* Employee */}
              <div
                onClick={() => {
                  setShowRegister(false);
                  setShowEmployee(true);
                  setLogin(false);
                }}
                className="flex-1 cursor-pointer border rounded-xl p-6 text-center hover:border-fuchsia-500 hover:shadow-lg transition"
              >
                <span
                  className="material-symbols-outlined text-fuchsia-500"
                  style={{ fontSize: "50px" }}
                >
                  groups
                </span>

                <h3 className="font-semibold mt-3">
                  Employee
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Refer talented candidates from your company
                </p>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;