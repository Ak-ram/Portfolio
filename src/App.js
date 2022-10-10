import "./App.css";
import WelcomeScreen from "./components/welcomeScreen/welcomeScreen";
import NavBar from "./components/navBar/navBar";
import Home from "./pages/home/home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);
  let appContent = (
    <Router>
      <NavBar />

      <Routes>
        <Route path="./" element={<Home />}></Route>
      </Routes>
    </Router>
  );
  return <>{loading ? <WelcomeScreen /> : appContent}</>;
}

export default App;
