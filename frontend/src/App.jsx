import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Results from "./pages/results/Results";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/results" element={<Results />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  );
}
export default App;
