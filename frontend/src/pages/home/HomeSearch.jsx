import { useState } from "react";
import Installing from "../../assets/img/installing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
    <div className="text-gray-900 max-w-6xl xl:w-full lg:min-w-6xl bg-amber-600 py-6 my-4 mx-auto rounded-3xl items-center overflow-hidden">
      <div className="flex lg:flex-row items-center flex-col lg:items-start">
        <div className=" relative -top-2 lg:w-1/2 p-2 lg:pr-0 sm:pr-40 flex flex-col lg:text-right lg:mb-20 m-0">
          <p className="text-2xl whitespace-nowrap font-medium lg:-mr-2 mr-0">
            I'm looking to use a
          </p>
          <h1 className="lg:-mb-16 lg:mb-20 mb-0 whitespace-nowrap tracking-wide font-medium lg:text-7xl text-6xl">
            laptop for
          </h1>
          {!isActive && (
            <img
              className="xl:w-full lg:w-96 lg:relative xl:top-0 lg:top-32 lg:block lg: hidden lg:-mb-32"
              src={Installing}
              alt="computer artwork"
            ></img>
          )}
        </div>
        <div className="lg:w-1/2 w-full lg:p-4 p-0 lg:pl-0 flex items-center">
          <ul className="w-full md:text-4xl text-3xl">
            <li
              onClick={() => setIsActive(!isActive)}
              className="whitespace-nowrap font-light lg:border-b-4 lg:pb-0 pb-2 border-b-2 m-6 border-gray-900 flex justify-between"
            >
              my business
              <FontAwesomeIcon
                icon={faBriefcase}
                className="whitespace-nowrap lg:p-3 p-1 items-center text-gray-900 size-2 fa-md"
              />
            </li>
            {!isActive && (
              <li className="whitespace-nowrap font-light lg:border-b-4 lg:pb-0 pb-2 border-b-2 m-6 border-gray-900 flex justify-between">
                gaming
                <FontAwesomeIcon
                  icon={faGamepad}
                  className="whitespace-nowrap lg:p-3 p-1 items-center text-gray-900 size-2 fa-md"
                />
              </li>
            )}
            {!isActive && (
              <li className="whitespace-nowrap font-light lg:border-b-4 lg:pb-0 pb-2 border-b-2 m-6 border-gray-900 flex justify-between">
                graphic/motion
                <FontAwesomeIcon
                  icon={faVideoCamera}
                  className="whitespace-nowrap lg:p-3 p-1 items-center text-gray-900 size-2 fa-md"
                />
              </li>
            )}
            {!isActive && (
              <li className="whitespace-nowrap font-light lg:border-b-4 lg:pb-0 pb-2 border-b-2 m-6 border-gray-900 flex justify-between">
                home/studio
                <FontAwesomeIcon
                  icon={faHouse}
                  className="whitespace-nowrap lg:p-3 p-1 items-center text-gray-900 size-2 fa-md"
                />
              </li>
            )}
            {!isActive && (
              <li className="whitespace-nowrap font-light lg:border-b-4 lg:pb-0 pb-2 border-b-2 m-6 border-gray-900 flex justify-between">
                workstation
                <FontAwesomeIcon
                  icon={faFile}
                  className="whitespace-nowrap lg:p-3 p-1 items-center text-gray-900 size-2 fa-md"
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      {isActive && <BusinessFilter />}
    </div>
  );
}

export default HomeSearch;
