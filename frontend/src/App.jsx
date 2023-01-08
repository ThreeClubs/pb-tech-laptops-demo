import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center w-screen h-screen bg-red-300">
      <h1 className="text-center bg-blue-300 m-2 p-2 rounded-full h-12 font-sans text-2xl font-bold">
        Hi!
      </h1>
    </div>
  );
}

export default App;
