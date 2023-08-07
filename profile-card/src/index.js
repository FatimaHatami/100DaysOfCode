import React from "react";
import ReactDOM from "react-dom";
import ProfileCard from "./components/ProfileCard";

import "./index.css";

const App = () => {
  return (
    <div className="container">
      <ProfileCard />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
