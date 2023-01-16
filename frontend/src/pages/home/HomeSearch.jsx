import { useState } from "react";
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

function HomeSearch() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="text-gray-900 max-w-5xl lg:w-full orange-background py-6 my-4 rounded-3xl items-center overflow-hidden">
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
              className="lg:w-full lg:w-96 lg:relative lg:top-0 lg:top-32 lg:block lg: hidden lg:-mb-32"
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
      {isActive && <BusinessFilter />}
      {isActive && (
        <div className="w-full flex lg:justify-end justify-center items-center">
          <button
            type="submit"
            className="w-full lg:w-64 m-4 px-4 py-1 bg-black text-white text-xl"
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
  );
}

export default HomeSearch;
