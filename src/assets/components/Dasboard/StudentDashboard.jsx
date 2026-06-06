import React from "react";

const StudentDashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-col relative z-1 bg-white"> 
      <h1 className="text-3xl font-bold text-center bg-violet-200">
        Student Dashboard
      </h1>
      <div className="ml-auto p-5 flex gap-5 text-[500px]">
        <span className="material-symbols-outlined" style={{ fontSize: "40px" }}>notifications</span>
        <span class="material-symbols-outlined" style={{ fontSize: "40px" }}>account_circle</span>
    </div>
      <div className="w-60 h-screen flex-col absolute z-2 bg-blue-100  gap-5">
        <h1 className="text-2xl font-bold text-fuchsia-600 pl-2 pt-3">ReferralX</h1>
        <div className="flex p-2 pl-5 gap-2 mt-3 "><span className="material-symbols-outlined">home</span>Dashboard</div>
        <div className="flex p-2 pl-5 gap-2 mt-3 "><span className="material-symbols-outlined">network_node</span>Available Referrals</div>
        <div className="flex p-2 pl-5 gap-2 mt-3 "><span className="material-symbols-outlined">person_add</span>My Request</div>
        <div className="flex p-2 pl-5 gap-2 mt-3 "><span className="material-symbols-outlined">assignment</span>Assessment</div>
        <div className="flex p-2 pl-5 gap-2 mt-3 "><span className="material-symbols-outlined">manage_accounts</span>My Profile</div>
        <div className="flex p-2 pl-5 gap-2 mt-3 "><span className="material-symbols-outlined">settings</span>Settings</div>
        <div className="flex p-2 pl-5 gap-2 mt-3 "><span className="material-symbols-outlined">logout</span>Logout</div>
      </div>
    </div>
  );
};

export default StudentDashboard;