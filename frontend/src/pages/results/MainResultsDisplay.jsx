import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function ResultDisplay({ laptops }) {
  console.log(laptops);
  return (
    <div className="max-w-6xl m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
      {laptops.length > 0 &&
        laptops.map((laptop) => (
          <div
            key={laptop._id}
            className="flex flex-col justify-center items-center border border-transparent mb-4"
          >
            <div className="h-1/2 p-2 flex justify-center items center">
              <img
                className="border border-green-white"
                src={laptop.img}
                alt="pic"
              ></img>
            </div>
            <div className="h-1/2 border border-white">
              <div className="p-4 border-r-2 border-dotted border-sky-600">
                <div className="mb-3">
                  <h3 className="mb-4 text-lg font-bold text-amber-500">
                    {laptop.brand} Generic Model
                  </h3>
                  <div className="border border-white">
                    <p className="text-sm text-sky-700">
                      {laptop.os} Operating System &#x2022; {laptop.screen}{" "}
                      Screen &#x2022; Trusted {laptop.brand} Quality &#x2022;{" "}
                      {laptop.quantity} Left In Stock &#x2022; Ideal For{" "}
                      {laptop.expertise} Professionals
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sky-600 text-sm font-bold">
                    Special Price!
                  </span>
                  <span className="text-3xl font-bold text-gray-900">
                    ${laptop.price}
                  </span>
                </div>
              </div>

              <div className="flex mb-4">
                <button className="rounded-sm py-2 w-full mx-1 font-bold text-sm border-2 text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="whitespace-nowrap fa-lg mr-2"
                  ></FontAwesomeIcon>{" "}
                  Add To Cart
                </button>
                <button className="rounded-sm py-2 w-full mx-1 font-bold text-sm bg-black text-white border-2 border-black hover:bg-white hover:text-black">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="whitespace-nowrap fa-lg mr-2"
                  ></FontAwesomeIcon>{" "}
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
