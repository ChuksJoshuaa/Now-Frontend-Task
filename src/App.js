import React, { useState } from "react";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div
      style={{
        background: "rgba(41, 51, 69, 1)",
        height: "100vh",
      }}
    >
      <div
        style={{
          marginTop: "2em",
          maxWidth: "980px",
          margin: "0 auto",
          width: "90%",
        }}
      >
        {showLogin ? null : (
          <button
            className="btn btn-primary"
            style={{ float: "right", marginTop: "2em" }}
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        )}
      </div>
      {showLogin ? <Auth setShowLogin={setShowLogin} /> : <Home />}
    </div>
  );
}

export default App;
