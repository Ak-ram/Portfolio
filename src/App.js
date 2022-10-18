import {
  WelcomeScreen,
  DevBlogsContextProvider,
  GitHubReposContextProvider,
  NavBar,
  Profile,
  Projects,
  Blog,
  Newsletter,
  Settings,
  ProjectDescription,
} from "./exporter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.scss";
function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setDarkMode] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);
  let appContent = (
    <Router>
      <DevBlogsContextProvider>
        <GitHubReposContextProvider>
          <div className={`${isDarkMode ? "app dark-mode" : "app light-mode"}`}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Profile />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              {/* Dynamic routing */}
              <Route
                path="projects/:projectName"
                element={<ProjectDescription />}
              ></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/newsletter" element={<Newsletter />}></Route>
              <Route
                path="/settings"
                element={
                  <Settings isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
                }
              ></Route>
            </Routes>
          </div>
        </GitHubReposContextProvider>
      </DevBlogsContextProvider>
    </Router>
  );
  return <>{loading ? <WelcomeScreen /> : appContent}</>;
}

export default App;
