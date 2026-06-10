import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDashboard from "./components/Dasboard/StudentDashboard.jsx";
import Profile from "./components/Dasboard/profile.jsx";
import Referrals from "./components/Dasboard/Rederral.jsx";
import MyRequest from "./components/Dasboard/myrequest.jsx";
import Assignment from "./components/Dasboard/Assigment.jsx";
import DashboardHome from "./components/Dasboard/dashhome.jsx";
import Home from './components/Home/Home.jsx'
import Admin from './components/Login&Registration/AdminLogin.jsx'
import Settings from './components/Dasboard/setting.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-login" element={<Admin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="referrals" element={<Referrals />} />
          <Route path="my-request" element={<MyRequest />} />
          <Route path="assignment" element={<Assignment />} />
          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;