import React from "react";
import "../Home/Home.css";
import { useState } from "react";
import StudentRegistration from "../Login&Registration/StudentRegistration.jsx";
import EmployeeRegistration from "../Login&Registration/EmployeeRegistration.jsx";
import LoginPage from "../Login&Registration/LoginPage.jsx";
const Home = () => {
  const [Login, setLogin] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [showEmployee, setShowEmployee] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-20 text-fuchsia-500">
        Welcome to the ReferralX
      </h1>
      <h2 className="text-xl font-semibold text-center">
        Smart Employee Referral Platform
      </h2>
      <div className="flex justify-center mt-10 gap-10">
        <div className="card card-degin">
          <span
            className="material-symbols-outlined mt-5"
            style={{ fontSize: "48px" }}>
            school
          </span>
          <span>Student</span>
          <p className="text-sm text-center">
            Find referral opportunities and boost your career
          </p>
          <button
            className="bg-fuchsia-500 text-white py-2 px-4 rounded-md hover:bg-fuchsia-600"
            onClick={() => setShowStudent(true)}>
            I'm a Student
          </button>
        </div>
        <div className="card card-degin">
          <span
            className="material-symbols-outlined mt-5"
            style={{ fontSize: "48px" }}>
            groups
          </span>
          <span>Employee</span>
          <p className="text-sm text-center">
            Post jobs and refeer talented candidates
          </p>
          <button
            className="bg-fuchsia-500 text-white py-2 px-4 rounded-md hover:bg-fuchsia-600"
            onClick={() => setShowEmployee(true)}>
            I'm an Employee
          </button>
        </div>
        
      </div>
      <p className="text-xl font-semibold text-center mt-20">
        Already have an account?{" "}
        <a
          className="text-fuchsia-500 hover:underline"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setLogin(true);
          }}>
          Login
        </a>{" "}
      </p>

      {showStudent && (
        <StudentRegistration close={() => setShowStudent(false)} />
      )}

      {showEmployee && (
        <EmployeeRegistration setShowEmployee={setShowEmployee} />
      )}

      
      {(Login || showRegister) && (
  <LoginPage
    setLogin={setLogin}
    setShowRegister={setShowRegister}
    showRegister={showRegister}
    setShowStudent={setShowStudent}
    setShowEmployee={setShowEmployee}
  />
)}
    </div>
  );
};

export default Home;
