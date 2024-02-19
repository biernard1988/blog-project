import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="App vh-100">
      <div className="background-container">
        <Navbar onBlogItClick={() => setShowMain(true)} />
        {showMain ? (
          <div className="main-wrapper">
            <Main />
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
