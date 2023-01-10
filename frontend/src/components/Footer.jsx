import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
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

function Footer() {
  return (
    <footer className="">
      {/* Main Footer */}
      <div className="text-xs text-gray-200 flex px-20 justify-between bg-neutral-700">
        <div className="flex">
          <div>
            <h2 className="font-bold text-stone-400">Shop by DEPARTMENT</h2>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
          </div>
          <div>
            <div className="text-neutral-700">EMPTY</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
            <div>Placeholder</div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-stone-400">Company Info</h2>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
        </div>
        <div>
          <h2 className="font-bold text-stone-400">Services & Support</h2>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
        </div>
        <div>
          <h2 className="font-bold text-stone-400">Promotions & Offers</h2>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
          <div>Placeholder</div>
        </div>
        <div>
          <h2 className="font-bold text-stone-400"> Become a PB Insider</h2>
        </div>
      </div>
      <div className="flex p-2 bg-neutral-700 justify-center lg:justify-evenly border-t-4 border-stone-500">
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
        <div className="px-2 py-0.5 rounded-sm m-2 bg-stone-600">
          <span className="text-sm text-neutral-200">
            <FontAwesomeIcon
              icon={faGlobe}
              className="items-center mr-1 text-neutral-400 size-2 fa-lg"
            />
            Country: New Zealand &#x2022; Australia &#x2022; Pacific &#x2022;
            Global
          </span>
        </div>
        <div className="m-2 flex items-center">
          <span className="text-sm text-neutral-500 h-5 hidden lg:flex">
            Download our app:
            <img
              className="mx-1 filter invert opacity-25 h-5"
              src={Apple}
            ></img>
            <img className="filter invert opacity-25 h-5" src={Android}></img>
          </span>
        </div>
      </div>

      {/* Postramble */}
      <div className="bg-stone-600 text-neutral-400 px-20 border-t-4 border-neutral-500">
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
