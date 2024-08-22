import React from 'react';
import './components/Class.css';
import images from "./images";
import Gallery from "./Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faEtsy
} from "@fortawesome/free-brands-svg-icons";

function Homepage() {
  return (
    <div className="background grid grid-cols-12">

      <div className="col-span-3 flex flex-col items-center justify-center">
        <div className="text-vertical">
          F<br />O<br />L<br />L<br />O<br />W<br /><br />U<br />S <br /><br />O<br />N
        </div>
        <div className="list-none mt-4">
          <li>
            <FontAwesomeIcon icon={faYoutube} className="w-8 h-8 " />
            <a href="https://www.facebook.com/"></a>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8 mt-2" />
            <a href="https://www.instagram.com/"></a>
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} className="w-8 h-8 mt-2" />
            <a href="https://www.etsy.com/"></a>
          </li>
        </div>

      </div>

      <div className="col-span-9">
      <Gallery 
          images={[images.homepage2, images.homepage1, images.homepage3]} 
          imageHeight="42rem" 
          imageMinWidth="65rem" 
        />
      </div>

      <div className=" bg-black col-span-12 h-12 flex items-center justify-center text-white font-mono	font-family: ui-monospace">
            <div className="font-bold lg:text-lg xl:text-xl 2xl:text-2xl mr-3">
            SHIDOSTUDIO
            </div>
            <div className="lg:text-base xl:text-lg 2xl:text-xl">
                A MARTIAL ARTS AND FIGHTING SPORTS CLUB
            </div>
            <div className="font-bold lg:text-lg xl:text-xl 2xl:text-2xl ml-10 mr-3">
            WE DO
            </div>
            <div className="lg:text-base xl:text-lg 2xl:text-xl">
            STRIKING WRESTLING GRAPLING
            </div>
            <div className="font-bold lg:text-lg xl:text-xl 2xl:text-2xl ml-10 mr-3">
            ALL LEVELS
            </div>
            <div className="lg:text-base xl:text-lg 2xl:text-xl">
                FOR ADULTS AND FOR KIDS
            </div>
      </div>
    </div>
  );
}

export default Homepage;
