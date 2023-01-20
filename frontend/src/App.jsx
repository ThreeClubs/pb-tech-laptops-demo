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
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  );
}
export default App;
