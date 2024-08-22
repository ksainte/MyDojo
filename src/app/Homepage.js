import React from 'react';
import './components/Class.css';
import images from "./images";
import Gallery from "./Gallery";
import Image from "next/image";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
	faEtsy
  } from "@fortawesome/free-brands-svg-icons";

function Homepage() {
  return (
    <div className="Homepage grid grid-cols-12">

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

      <div className="col-span-9 ">
        <Gallery images={[images.homepage2, images.homepage1, images.homepage3]} />
      </div>

      <div className="Lower_banner bg-black">
        <div className="text-white">
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
      </div>
    </div>
  );
}

export default Homepage;
