import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/navBar/navBar";
import WelcomeScreen from "./components/welcomeScreen/welcomeScreen";
import Blog from "./pages/blog/blog";
import Home from "./pages/home/home.jsx";
import Newsletter from "./pages/newsletter/newsletter.jsx";
import Profile from "./pages/profile/profile";
import Projects from "./pages/projects/projects";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);
  let appContent = (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/newsletter" element={<Newsletter />}></Route>
      </Routes>
    </Router>
  );
  return <>{loading ? <WelcomeScreen /> : appContent}</>;
}

export default App;
