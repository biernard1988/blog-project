import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <div className="App vh-100">
      <div className="background-container">
        <Navbar onBlogItClick={() => setShowHome(true)} />
        {showHome ? (
          <div className="main-wrapper">
            <Home />
          </div>
        ) : (
          <div className="main-wrapper">
            <div className="background-container"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
