import WelcomeScreen from "./components/welcomeScreen/welcomeScreen";
import { DevBlogsContextProvider } from "./contexts/DEVAPIContext";
import { GitHubReposContextProvider } from "./contexts/GitHubAPIContext";
import NavBar from "./components/navBar/navBar";
import Home from "./pages/home/home.jsx";
import Profile from "./pages/profile/profile";
import Projects from "./pages/projects/projects";
import Blog from "./pages/blog/blog";
import Newsletter from "./pages/newsletter/newsletter.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);
  let appContent = (
    <Router>
      <DevBlogsContextProvider>
        <GitHubReposContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/newsletter" element={<Newsletter />}></Route>
          </Routes>
        </GitHubReposContextProvider>
      </DevBlogsContextProvider>
    </Router>
  );
  return <>{loading ? <WelcomeScreen /> : appContent}</>;
}

export default App;
