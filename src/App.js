import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {
  Blog,
  DevBlogsContextProvider,
  GitHubReposContextProvider,
  NavBar,
  Newsletter,
  Profile,
  Projects,
  Settings,
  WelcomeScreen,
} from "./exporter";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setTimeout(() => setLoading(false), 3500); }, []);
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
  return <>{loading ? <WelcomeScreen /> : appContent
}
< />;
}

export default App;
