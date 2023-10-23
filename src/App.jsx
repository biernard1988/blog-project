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
            {/* Render the Main component when showMain is true */}
            <Main />
          </div>
        ) : (
          <div className="main-wrapper">
            {/* Render an empty div or other content when showMain is false */}
            <div className="background-container"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
