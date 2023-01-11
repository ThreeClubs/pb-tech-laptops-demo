import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faComputer,
  faHardDrive,
  faPrint,
  faTv,
  faGamepad,
  faPlus,
  faKey,
  faAppleWhole,
  faKeyboard,
  faWifi,
  faMobileScreen,
  faHeadphones,
  faCamera,
  faRobot,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import Apple from "../assets/img/apple_logo.png";
import Android from "../assets/img/android_logo.png";
import Visa from "../assets/img/img_visajpg.png";
import Mastercard from "../assets/img/img_mastercardjpg.png";
import AMEX from "../assets/img/img_americanexpres.png";
import Qmaster from "../assets/img/img_qmastercardpng.png";
import OnlineEftpos from "../assets/img/img_onlineeftposj.png";
import Laybuy from "../assets/img/img_laybuyjpg.png";
import Klarna from "../assets/img/img_klarnajpg.png";
import ApplePay from "../assets/img/img_applepayjpg.png";
import POLI from "../assets/img/img_polijpg.png";
import PBInsider from "../assets/img/pb-inside_banner.png";
import Social from "../assets/img/Social.png";
import Feedback from "../assets/img/feeback_button.png";

function Footer() {
  return (
    <footer className="">
      {/* Main Footer */}
      <div className="text-xs text-gray-200 flex px-10 py-4 w-full bg-neutral-800">
        <div className="flex leading-8 lg:w-1/3 w-full justify-evenly">
          <div className="whitespace-nowrap">
            <h2 className="font-bold text-stone-400">Shop by DEPARTMENT</h2>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faComputer}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Computers & Tablets
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faHardDrive}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              PC Parts
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faPrint}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Printing & Office
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faTv}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              TV & AV
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faGamepad}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Gaming
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faKey}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Smart Home & Security
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faPlus}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              More
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faAppleWhole}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Apple
            </div>
          </div>
          <div className="whitespace-nowrap">
            <div className="invisible">EMPTY</div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faKeyboard}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              PC Peripherals & Accessories
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faWifi}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Networking
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faMobileScreen}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Phones & Accessories
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faHeadphones}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Headphones & Audio
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faCamera}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Cameras & Drones
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faRobot}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Toys, Hobbies & STEM
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faGift}
                className="whitespace-nowrap items-center mr-1 text-amber-600 size-2 fa-lg"
              />
              Gift Ideas
            </div>
          </div>
        </div>
        <div className="leading-6 w-1/6 hidden lg:block">
          <h2 className="font-bold text-stone-400">Company Info</h2>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            About Us
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Business
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Education
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Wholesale
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Government
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Health
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Stores
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Careers
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Contact Us
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            News
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Terms & Conditions
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Privacy Policy
          </div>
        </div>
        <div className="leading-6 w-1/6 hidden lg:block">
          <h2 className="font-bold text-stone-400">Services & Support</h2>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Help
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Returns & Warranty
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Finance
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            IT Services
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Home Services
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Repair Services
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Job Tracker
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Service Parts
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            System Builder
          </div>
        </div>
        <div className="leading-6 w-1/6 hidden lg:block">
          <h2 className="font-bold text-stone-400">Promotions & Offers</h2>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Promotions
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Clearance
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Hot Deals
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            New Arrivals
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            BYOD
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Tax Free Shopping
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            Events
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            PB Insider
          </div>
          <div className="flex whitespace-nowrap items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              className="fill-amber-600 h-4 mr-2"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
            PB Advisor
          </div>
        </div>
        <div className="w-1/6 hidden lg:block">
          <h2 className="font-bold text-stone-400 leading-6">
            {" "}
            Become a PB Insider
          </h2>
          <div className="flex flex-col items-end">
            <img className="pb-2 w-full" src={PBInsider} alt="pb insider" />
            <img className="w-3/4 pb-2" src={Social} alt="" />
            <button className="bg-gray-100 rounded-md p-1 w-20">
              <img src={Feedback} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex p-2 bg-neutral-800 justify-center lg:justify-evenly border-t border-stone-700">
        <div className="hidden lg:flex justify-center items-center m-2">
          <img className="h-5 w-10" src={Visa} alt="piclnk"></img>
          <img className="h-5 w-10" src={Mastercard} alt="piclnk"></img>
          <img className="h-5 w-10" src={AMEX} alt="piclnk"></img>
          <img className="h-5 w-10" src={Qmaster} alt="piclnk"></img>
          <img className="h-5 w-10" src={OnlineEftpos} alt="piclnk"></img>
          <img className="h-5 w-10" src={Laybuy} alt="piclnk"></img>
          <img className="h-5 w-10" src={Klarna} alt="piclnk"></img>
          <img className="h-5 w-10" src={ApplePay} alt="piclnk"></img>
          <img className="h-5 w-10" src={POLI} alt="piclnk"></img>
        </div>
        <div className="px-2 py-0.5 rounded-sm m-2 bg-stone-700">
          <span className="text-sm text-neutral-200">
            <FontAwesomeIcon
              icon={faGlobe}
              className="items-center mr-1 text-neutral-400 size-2 fa-lg"
            />
            Country: <span className="text-amber-600">New Zealand</span>{" "}
            &#x2022; Australia &#x2022; Pacific &#x2022; Global
          </span>
        </div>
        <div className="m-2 flex items-center">
          <span className="text-sm text-neutral-500 h-5 hidden lg:flex">
            Download our app:
            <img
              className="mx-1 filter invert opacity-25 h-5"
              src={Apple}
            ></img>
            <img
              className="filter invert opacity-25 h-5"
              alt="android logo"
              src={Android}
            ></img>
          </span>
        </div>
      </div>

      {/* Postramble */}
      <div className="bg-stone-700 text-neutral-400 px-20 border-t border-neutral-600">
        <h2 className="text-center font-bold text-xs p-1">
          Copyright © PB Technologies Ltd All rights reserved. 587 Great South
          Road, Manukau, Auckland, New Zealand
        </h2>
        <p className="text-center text-xs p-1 pb-6">
          PB Technologies Ltd is not responsible for typographical errors. All
          prices and specifications are subject to change without notice.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
