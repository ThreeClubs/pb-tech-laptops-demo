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
      <div id="column-wrapper"></div>

      <div id="mini-links-wrapper" className="flex bg-stone-800">
        <div className="flex">
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
        <div className="p-1">
          <span className="text-sm text-neutral-400">
            <FontAwesomeIcon
              icon={faGlobe}
              className="items-center mr-1 text-neutral-400 size-2 fa-lg"
            />
            Country: New Zealand &#x2022; Australia &#x2022; Pacific &#x2022;
            Global
          </span>
        </div>
        <div className="">
          <span className="text-sm text-neutral-500 h-5 flex">
            Download our app:
            <img
              className="items-center mx-1 filter invert opacity-25 h-5"
              src={Apple}
            ></img>
            <img
              className="items-center filter invert opacity-25 h-5"
              src={Android}
            ></img>
          </span>
        </div>
      </div>

      {/* Postramble */}
      <div className="bg-stone-600 text-neutral-400 px-20">
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
