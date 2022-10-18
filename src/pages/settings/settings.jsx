const Settings = ({ setDarkMode, isDarkMode }) => {
  return <button onClick={() => setDarkMode(!isDarkMode)}>toggle mode</button>;
};

export default Settings;
