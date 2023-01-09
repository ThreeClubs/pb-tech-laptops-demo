import {Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Results from "./pages/results/Results";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/results" element={<Results />} />
    </Routes>
  </>)
}
export default App;
