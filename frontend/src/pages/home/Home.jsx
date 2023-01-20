import { useState, useEffect } from "react";
import Installing from "../../assets/img/installing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faGamepad,
  faBriefcase,
  faHouse,
  faFile,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import BusinessFilter from "./BusinessFilter";
import LaptopGuide from "../../components/banners/LaptopGuide";
import LaptopCarousel from "../../components/carousels/LaptopCarousel";
import OffLease from "../../components/banners/OffLease";
import Articles from "../../components/links/Articles";
import Results from "../results/Results";
import axios from "axios";

function Home() {
  const [isActive, setIsActive] = useState(false);
  const [contentToggle, setContentToggle] = useState(false);
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/laptops/")
      .then((res) => {
        setLaptops(...[res.data.laptops]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {contentToggle && (
        <div className="max-w-6xl mx-auto flex items-center p-6 border-b border-gray-900">
          <div className=" text-2xl text-amber-500">
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() => setContentToggle(false)}
              className="fa-lg  hover:text-black mr-2"
            />
            my laptop search for
          </div>
          <span className="text-gray-900 text-lg lg: ml-12">
            My Business / Specs / SubCategory / Quantity in Stock
          </span>
        </div>
      )}

      <div className="max-w-6xl flex flex-col justify-center items-center mx-auto">
        {/* Main search functionality */}
        {!contentToggle && (
          <div className="text-gray-900 max-w-5xl w-3/4 lg:w-full orange-background py-6 my-4 rounded-3xl items-center overflow-hidden">
            {isActive && (
              <div className="relative w-20 left-5 flex items-center justify-around">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  onClick={() => setIsActive(false)}
                  className="transform scale-x-150 fa-lg text-white whitespace-nowrap hover:text-black"
                />
                <span className="text-white text-xl font-light">back</span>
              </div>
            )}

            <div className="flex lg:flex-row items-center flex-col lg:items-start">
              <div className="relative -top-2 lg:w-1/2 p-4 lg:pr-0 sm:pr-40 flex flex-col lg:text-right lg:mb-20">
                <p className="text-2xl whitespace-nowrap font-medium lg:-mr-2 mr-0">
                  I am looking to use a
                </p>
                <h1 className="lg:-mb-16 lg:mb-20 mb-0 whitespace-nowrap font-medium lg:text-7xl text-6xl">
                  laptop for
                </h1>
                {!isActive && (
                  <img
                    className="lg:w-full lg:w-96 lg:relative lg:top-0 lg:top-32 lg:block lg: hidden"
                    src={Installing}
                    alt="computer artwork"
                  ></img>
                )}
              </div>
              <div className="lg:w-1/2 w-full lg:p-4 p-0 lg:pl-0 flex items-center">
                <ul className="w-full md:text-4xl text-3xl sm:mx-4 md:mx-6 lg:ml-3 lg:mr-12 lg:ml-2">
                  <li
                    onClick={() => setIsActive(!isActive)}
                    className="hover:bg-black hover:text-white hover:transition-all rounded-sm group whitespace-nowrap font-light lg:border-b-4 lg:pb-0 pb-2 border-b-2 mx-4 py-6 px-0 border-gray-900 flex items-center justify-between hover:justify-evenly"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="whitespace-nowrap lg:p-3 p-1 hidden items-center group-hover:inline group-hover:text-white text-gray-900 size-2 fa-md"
                    />
                    my business
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="whitespace-nowrap lg:p-3 p-1 items-center group-hover:text-white text-gray-900 size-2 fa-md"
                    />
                  </li>
                  {!isActive && (
                    <li className="hover:bg-black hover:text-white hover:transition-all rounded-sm group whitespace-nowrap font-light lg:border-b-4 lg:pb-0 pb-2 border-b-2 mx-4 py-6 px-0 border-gray-900 flex items-center justify-between hover:justify-evenly">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="whitespace-nowrap lg:p-3 p-1 hidden items-center group-hover:inline group-hover:text-white text-gray-900 size-2 fa-md"
                      />
                      gaming
                      <FontAwesomeIcon
                        icon={faGamepad}
                        className="whitespace-nowrap lg:p-3 p-1 items-center group-hover:text-white text-gray-900 size-2 fa-md"
                      />
                    </li>
                  )}
                  {!isActive && (
                    <li className="hover:bg-black hover:text-white hover:transition-all rounded-sm group whitespace-nowrap font-light lg:border-b-4 lg:pb-0 pb-2 border-b-2 mx-4 py-6 px-0 border-gray-900 flex items-center justify-between hover:justify-evenly">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="whitespace-nowrap lg:p-3 p-1 hidden items-center group-hover:inline group-hover:text-white text-gray-900 size-2 fa-md"
                      />
                      graphic/motion
                      <FontAwesomeIcon
                        icon={faVideoCamera}
                        className="whitespace-nowrap lg:p-3 p-1 items-center group-hover:text-white text-gray-900 size-2 fa-md"
                      />
                    </li>
                  )}
                  {!isActive && (
                    <li className="hover:bg-black hover:text-white hover:transition-all rounded-sm group whitespace-nowrap font-light lg:border-b-4 lg:pb-0 pb-2 border-b-2 mx-4 py-6 px-0 border-gray-900 flex items-center justify-between hover:justify-evenly">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="whitespace-nowrap lg:p-3 p-1 hidden items-center group-hover:inline group-hover:text-white text-gray-900 size-2 fa-md"
                      />
                      home/studio
                      <FontAwesomeIcon
                        icon={faHouse}
                        className="whitespace-nowrap lg:p-3 p-1 items-center group-hover:text-white text-gray-900 size-2 fa-md"
                      />
                    </li>
                  )}
                  {!isActive && (
                    <li className="hover:bg-black hover:text-white hover:transition-all rounded-sm group whitespace-nowrap font-light lg:border-b-4 lg:pb-0 pb-2 border-b-2 mx-4 py-6 px-0 border-gray-900 flex items-center justify-between hover:justify-evenly">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="whitespace-nowrap lg:p-3 p-1 hidden items-center group-hover:inline group-hover:text-white text-gray-900 size-2 fa-md"
                      />
                      workstation
                      <FontAwesomeIcon
                        icon={faFile}
                        className="whitespace-nowrap lg:p-3 p-1 items-center group-hover:text-white text-gray-900 size-2 fa-md"
                      />
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div>{isActive && <BusinessFilter laptops={laptops} />}</div>

            {isActive && (
              <div className="w-full flex lg:justify-end justify-center items-center">
                <button
                  type="submit"
                  className="w-full lg:w-64 m-4 px-4 py-2 bg-black hover:text-black hover:bg-white text-white text-xl"
                  onClick={() => setContentToggle(!contentToggle)}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="whitespace-nowrap fa-lg mr-2"
                  ></FontAwesomeIcon>
                  <span> Search</span>
                </button>
              </div>
            )}
          </div>
        )}
        {contentToggle && <Results laptops={laptops} />}
      </div>

      {/* Banner 1 */}
      {!contentToggle && <LaptopGuide />}
      {/* Carousel */}
      {!contentToggle && <LaptopCarousel />}
      {/* Banner 2 */}
      {!contentToggle && <OffLease />}
      {/* Links  */}
      {!contentToggle && <Articles />}
    </div>
  );
}

export default Home;
