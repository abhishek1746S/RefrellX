import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col relative bg-white cursor-default">
      <h1 className="text-3xl font-bold text-center bg-violet-200">
        Student Dashboard
      </h1>

      <div className="ml-auto p-5 flex gap-5 text-[500px]"></div>

      {/* Sidebar */}
      <div className="w-60 h-screen flex flex-col absolute z-10 bg-blue-100 gap-5 cursor-pointer">
        <h1 className="text-2xl font-bold text-fuchsia-600 pl-2 pt-3">
          ReferralX
        </h1>

        <div
          className="flex p-2 pl-5 gap-2 mt-3"
          onClick={() => navigate("/student-dashboard")}
        >
          <span className="material-symbols-outlined">home</span>
          Dashboard
        </div>

        <div
          className="flex p-2 pl-5 gap-2 mt-3"
          onClick={() => navigate("/student-dashboard/referrals")}
        >
          <span className="material-symbols-outlined">network_node</span>
          Available Referrals
        </div>

        <div
          className="flex p-2 pl-5 gap-2 mt-3"
          onClick={() => navigate("/student-dashboard/my-request")}
        >
          <span className="material-symbols-outlined">person_add</span>
          My Request
        </div>

        <div
          className="flex p-2 pl-5 gap-2 mt-3"
          onClick={() => navigate("/student-dashboard/assignment")}
        >
          <span className="material-symbols-outlined">assignment</span>
          Assessment
        </div>

        <div
          className="flex p-2 pl-5 gap-2 mt-3"
          onClick={() => navigate("/student-dashboard/profile")}
        >
          <span className="material-symbols-outlined">manage_accounts</span>
          My Profile
        </div>

        <div
          className="flex p-2 pl-5 gap-2 mt-3"
          onClick={() => navigate("/student-dashboard/settings")}
        >
          <span className="material-symbols-outlined">settings</span>
          Settings
        </div>

        <div
          className="flex p-2 pl-5 gap-2 mt-3"
          onClick={() => navigate("/")}
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </div>
      </div>

      {/* Page Content */}
      <div className="ml-60 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;