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
        <div >
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

      <div className=" bg-black col-span-12 flex flex-col items-center gap-4 text-white <<font-mono	font-family: ui-monospace>> py-10">
          <div className="flex">
            <div className="font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl mr-5">
            SHIDOSTUDIO
            </div>
            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl italic">
                A MARTIAL ARTS AND FIGHTING SPORTS CLUB
            </div>
            </div>
            <div className="flex">
            <div className="font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl mr-5">
            WE PRACTICE
            </div>
            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl italic">
            STRIKING WRESTLING GRAPLING
            </div>
            </div>
            <div className="flex">
            <div className="font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl mr-5">
            ALL LEVELS
            </div>
            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl italic">
                FOR ADULTS AND FOR KIDS
            </div>
            </div>
      </div>
    </div>
  );
}

export default Homepage;
