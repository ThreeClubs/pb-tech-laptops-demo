import Navbar from "../../components/Navbar";
import HomeSearch from "./HomeSearch";
import LaptopGuide from "../../components/banners/LaptopGuide";
import LaptopCarousel from "../../components/carousels/LaptopCarousel";
import OffLease from "../../components/banners/OffLease";
import Articles from "../../components/links/Articles";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      {/* Main search functionality */}
      <HomeSearch />

      {/* Banner 1 */}
      <LaptopGuide />
      {/* Carousel */}
      <LaptopCarousel />
      {/* Banner 2 */}
      <OffLease />
      {/* Links  */}
      <Articles />
    </>
  );
}

export default Home;
