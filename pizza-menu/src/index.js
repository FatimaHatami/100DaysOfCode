import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./component/Header";
import Menu from "./component/Menu";

import "./index.css";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
