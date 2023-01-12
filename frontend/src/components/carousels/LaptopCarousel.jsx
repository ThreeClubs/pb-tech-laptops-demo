import Carousel from "react-elastic-carousel";

function LaptopCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="my-8 text-center border-y-2 p-2 border-sky-100">
      <div className="inline-block">
        <h1 className="text-2xl font-medium text-gray-800 text-left">
          Our special New Year Deals
        </h1>
        <p className="text-sm text-left hidden sm:flex w-2/3">
          This is a carousel of laptoppy goodness. Consume with lust and ardour.
          You will buy all the laptops. Yes. Many laptop = many wow! You know
          what to do, my friend...
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-4">
        <Carousel breakPoints={breakPoints}>
          <img
            className="border-2 border-sky-100 p-2"
            src="images/zenbook_card.png"
            alt="carousel card"
          ></img>
          <img
            className="border-2 border-sky-100 p-2"
            src="images/lenovo_card.png"
            alt="carousel card"
          ></img>
          <img
            className="border-2 border-sky-100 p-2"
            src="images/probook_card.png"
            alt="carousel card"
          ></img>
          <img
            className="border-2 border-sky-100 p-2"
            src="images/zenbook_card.png"
            alt="carousel card"
          ></img>
          <img
            className="border-2 border-sky-100 p-2"
            src="images/lenovo_card.png"
            alt="carousel card"
          ></img>
          <img
            className="border-2 border-sky-100 p-2"
            src="images/probook_card.png"
            alt="carousel card"
          ></img>
          <img
            className="border-2 border-sky-100 p-2"
            src="images/zenbook_card.png"
            alt="carousel card"
          ></img>
          <img
            className="border-2 border-sky-100 p-2"
            src="images/lenovo_card.png"
            alt="carousel card"
          ></img>
          <img
            className="border-2 border-sky-100 p-2"
            src="images/probook_card.png"
            alt="carousel card"
          ></img>
        </Carousel>
      </div>
    </div>
  );
}

export default LaptopCarousel;
