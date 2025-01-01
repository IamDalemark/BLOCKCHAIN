import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import DashboardPage from "./pages/DashboardPage";
import AiEditPage from "./pages/AiEditPage";
import CalendarPage from "./pages/CalendarPage";
import LandingPage from "./pages/LandingPage";
import LogInPage from "./pages/LogInPage";
import ManualEditPage from "./pages/ManualEditPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route index element={<DashboardPage />} />
        <Route path="AiEdit" element={<AiEditPage />} />
        <Route path="ManualEdit" element={<ManualEditPage />} />
        <Route path="Calendar" element={<CalendarPage />} />
        <Route path="Landing" element={<LandingPage />} />
        <Route path="Login" element={<LogInPage />} />
        <Route path="Profile" element={<ProfilePage />} />
        <Route path="Signup" element={<SignUpPage />} />1
      </Routes>
    </BrowserRouter>
  );
}

export default App;
