import "./App.css";
import WelcomeScreen from "./components/welcomeScreen/welcomeScreen";
import NavBar from "./components/navBar/navBar";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);
  return (
    <>
      {loading ? <WelcomeScreen /> : ""}
      <NavBar />
    </>
  );
}

export default App;
