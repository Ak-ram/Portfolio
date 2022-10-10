import "./App.css";

import { useEffect, useState } from "react";

import NavBar from "./components/navBar/navBar";
import WelcomeScreen from "./components/welcomeScreen/welcomeScreen";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <>
      {loading ? <WelcomeScreen /> : ""}
      <NavBar />
    </>
  );
}

export default App;
