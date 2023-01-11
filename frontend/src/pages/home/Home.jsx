import HomeSearch from "./HomeSearch";
import LaptopGuide from "../../components/banners/LaptopGuide";
import LaptopCarousel from "../../components/carousels/LaptopCarousel";
import OffLease from "../../components/banners/OffLease";
import Articles from "../../components/links/Articles";

function Home() {
  return (
    <div className="max-w-6xl flex flex-col justify-center items-center mx-auto">
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
    </div>
  );
}

export default Home;
