import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDashboard from "../src/assets/components/Dasboard/StudentDashboard.jsx";
import Home from '../src/assets/components/Home/Home.jsx'
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
