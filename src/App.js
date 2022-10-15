import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {
  Blog,
  DevBlogsContextProvider,
  GitHubReposContextProvider,
  Home,
  NavBar,
  Newsletter,
  Profile,
  Projects,
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
  return <>{loading ? <WelcomeScreen /> : appContent
}
< />;
}

export default App;
