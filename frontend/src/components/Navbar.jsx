import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PBTechLogo from "../assets/img/PBTech_logo.png";

function Navbar() {
  return (
    <header className="font-body">
      {/* Top Nav Bar */}
      <nav className="text-center text-white text-xs md:h-9 h-12 w-full flex justify-between md:block md:bg-gray-900 bg-sky-800 md:py-0 md:px-20 p-2">
        <div className="md:hidden h-full flex items-center">
          <img className="h-full" src={PBTechLogo} alt="PB logo" />
        </div>
        <div className="h-full w-8 md:hidden cursor-pointer">
          <svg
            className="h-full fill-gray-100 hover:fill-amber-600"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </div>

        <ul className="md:flex justify-between hidden lg:pr-32 pr-0 max-w-7xl whitespace-nowrap">
          <li className="mx-auto leading-9 w-full hover:bg-gray-700">
            <a href="#">PB Tech</a>
          </li>
          <li className="mx-auto leading-9 w-full hover:bg-gray-700">
            <a href="#">Hardwired</a>
          </li>
          <li className="mx-auto leading-9 w-full hover:bg-gray-700">
            <a href="#">PB Business</a>
          </li>
          <li className="mx-auto leading-9 w-full hover:bg-gray-700">
            <a href="#">PB Education</a>
          </li>
          <li className="mx-auto leading-9 w-full hover:bg-gray-700">
            <a href="#">PB Wholesale</a>
          </li>
          <li className="mx-auto leading-9 w-full hover:bg-gray-700">
            <a href="#">PB Government</a>
          </li>
          <li className="mx-auto leading-9 w-full hover:bg-gray-700">
            <a href="#">PB Health</a>
          </li>
          <li className="mx-auto leading-9 w-full hover:bg-gray-700">
            <a href="#">PB IoT</a>
          </li>
        </ul>
      </nav>
      {/* Nav Main With Logo, Searchbar, and Auth */}
      <div className="bg-sky-800 h-full w-full pt-5 px-20 md:block hidden">
        <div className="text-center w-full text-white text-sm md:flex hidden h-8">
          <div className="h-full mr-8">
            <img className="h-full" src={PBTechLogo} alt="PB logo" />
          </div>
          <div className="flex items-center w-full">
            <div className="w-full mr-20 hidden lg:flex rounded-sm overflow-hidden">
              <input
                type="text"
                className="block w-full px-4 py-2 text-purple-700 bg-white border focus:outline-none"
                placeholder="Search..."
              />
              <button className="px-4 text-white bg-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="text-xs flex justify-between h-12">
              <div className="flex justify-center items-center whitespace-nowrap bg-sky-900 rounded-sm m-1">
                <div className="w-full flex justify-center items-center m-2">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="items-center mr-1 text-sky-500 size-2 fa-xl"
                  />
                  <a className="cursor-pointer">Sign-In</a>
                  <span className="text-sky-600 m-1"> or </span>
                  <a className="cursor-pointer">Create Account</a>
                </div>
              </div>
              <div className=" cursor-pointer whitespace-nowrap flex justify-center items-center bg-sky-900 rounded-sm m-1 p-2">
                Wish List
                <FontAwesomeIcon
                  icon={faHeart}
                  className="items-center mr-1 text-sky-500 size-2 fa-xl m-2"
                />
              </div>
              <div className="cursor-pointer flex justify-center items-center bg-sky-900 rounded-sm m-1 p-4">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="items-center mr-1 text-sky-500 size-2 fa-xl mr-4"
                />
                <div className="bg-amber-600 rounded-full px-2 py-0.5">0</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 w-full mr-20 lg:hidden flex rounded-sm overflow-hidden">
          <input
            type="text"
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-white focus:outline-none"
            placeholder="Search..."
          />
          <button className="px-4 text-white bg-amber-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {/* Bottom Nav */}

        <nav className="mt-5 w-full h-11 text-center text-gray-100 text-sm flex justify-between items-center">
          <div className="w-44 h-full lg:flex hidden  justify-evenly p-2">
            <div className="cursor-pointer mx-auto leading-4">
              <svg
                className="h-full fill-gray-100 p-1 hover:fill-amber-600"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </div>
            <span className="text-lg ml-2">Departments</span>
          </div>

          <ul className="justify-start md:flex hidden lg:pr-32 pr-0 whitespace-nowrap">
            <li className="cursor-pointer hover:bg-sky-700 mx-auto py-2 px-4 leading-4">
              <div className="dropdown inline-block relative">
                <button className="inline-flex items-center">
                  <span className="mr-1">Brands</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-left absolute hidden text-gray-100 pt-1">
                  <li className="">
                    <a
                      className="rounded-t bg-sky-900 hover:hover:bg-sky-700 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Acer
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="bg-sky-900 hover:bg-sky-700 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Apple
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-sky-900 hover:bg-sky-700 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Microsoft
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="cursor-pointer hover:bg-sky-700 mx-auto py-2 px-4 leading-4">
              <div className="dropdown inline-block relative">
                <button className="inline-flex items-center">
                  <span className="mr-1">Services</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu text-left absolute hidden text-gray-100 pt-1">
                  <li className="">
                    <a
                      className="rounded-t bg-sky-900 hover:bg-sky-700 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Repair
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="bg-sky-900 hover:bg-sky-700 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Finance
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-sky-900 hover:bg-sky-700 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Custom Builds
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="cursor-pointer hover:bg-sky-700 mx-auto py-2 px-4 leading-4">
              Promotions
            </li>
            <li className="cursor-pointer hover:bg-sky-700 mx-auto py-2 px-4 leading-4">
              Hot Deals
            </li>
            <li className="cursor-pointer hover:bg-sky-700 mx-auto py-2 px-4 leading-4">
              New Arrivals
            </li>
            <li className="cursor-pointer hover:bg-sky-700 mx-auto py-2 px-4 leading-4">
              Tax Free Shopping
            </li>
            <li className="cursor-pointer hover:bg-sky-700 mx-auto py-2 px-4 leading-4">
              BYOD
            </li>
          </ul>
          <ul className="xl:flex hidden whitespace-nowrap text-xs">
            <li className="p-2 cursor-pointer">Returns</li>
            <li className="p-2 cursor-pointer">Help & Support</li>

            <li className="p-2 cursor-pointer">
              <FontAwesomeIcon icon={faStore} className="items-center mr-1" />
              {}Stores
            </li>
          </ul>
        </nav>
      </div>
      {/* Route path display */}
      <div className="md:px-20 p-4 bg-gray-200">
        <p className="text-sm text-sky-700">
          Home &gt; Computers & Laptops &gt;{" "}
          <span className="text-gray-500">Laptops</span>
        </p>
        <h1 className="text-3xl font-medium text-sky-800">Laptops</h1>
      </div>
    </header>
  );
}

export default Navbar;
