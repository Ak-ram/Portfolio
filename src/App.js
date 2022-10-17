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
} from "./exporter";

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
            <Route path="/" element={<Profile />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/newsletter" element={<Newsletter />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </GitHubReposContextProvider>
      </DevBlogsContextProvider>
    </Router>
  );
  return <>{loading ? <WelcomeScreen /> : appContent}</>;
}

export default App;
