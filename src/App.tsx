import React from "react";
import "./App.css";
import "./output.css";
import HeaderModule from "./modules/header";
import MainModule from "./modules/main";

function App() {
  return (
      <div className="bg-gray-dark h-screen flex-1 flex-col">
        <div className="App m-auto max-w-7xl pt-3 px-4">
          <HeaderModule/>
          <MainModule/>
        </div>
      </div>
  );
}

export default App;
