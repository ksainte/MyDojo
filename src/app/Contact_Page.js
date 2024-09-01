import React from 'react';
import Schedule from './components/Schedule';
import images from "./images";
import Image from "next/image";
import Gallery from "./Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faEtsy
} from "@fortawesome/free-brands-svg-icons";

const DisciplineStyle = {
    objectFit: 'contain',
    width: '100%',  // Equivalent to `w-full`
  height: '35rem', // Equivalent to `h-60` (Tailwind's `h-60` is typically `15rem`)
  };
  
// Adresse: Rue de l’Hôtel des Monnaies, 1060 Saint-Gilles, Bruxelles. 
//CONTACT
const ContactPage = () => {
    return (
        <div className="flex-col pb-10">
            <div className="bg-black w-full text-white flex items-center flex-col py-10 gap-4 max-md:py-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-black ">
                <span className="stroke-white stroke-2 text-stroke">CONTACT</span>
                </div>
                <div className="max-lg:text-center xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace italic max-lg:px-4">
                Adresse: Rue de l’Hôtel des Monnaies, 1060 Saint-Gilles, Bruxelles. 
                </div>
            </div>
            <div className="flex justify-center w-full mt-10 px-2">
                <div className="flex justify-evenly items-center w-full  xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl gap-10">
                    <div className="flex max-sm:flex-col max-sm:text-center">
                        <div className="bg-white flex flex-col gap-2 sm:p-10 text-black items-start max-sm:items-center">
                            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace">ADRESSE</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">Rue de l’Hôtel des Monnaies, 1060 Saint-Gilles, Bruxelles.</div>
                            <div className="w-full h-px bg-black m-3 "></div> 
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">Accès:</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">Métro 2 - 6</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">Hôtel des Monnaies</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">Tram 3 - 4</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">Parvis de Saint Gilles</div>
                            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace">TELEPHONE</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">+32 4 88 47 69 06</div>
                            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace">EMAIL</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">shidostudio@hotmail.be</div>

                        </div>
                        <Image src={images.map} className=" px-5" style={DisciplineStyle} alt="gallery_image"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full xs:mt-10 items-center p-1">
                <div className="flex w-full max-w-screen-2xl items-center gap-4">
                    <div className="flex-shrink-0 lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">
                        FOLLOW US ON
                    </div>
                    <div className="list-none flex gap-3 flex-shrink-0"> {/* Added ml-4 for spacing */}
                        <li>
                            <a href="https://www.youtube.com/">
                                <FontAwesomeIcon icon={faYoutube} className="w-8 h-8" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/">
                                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/">
                                <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
                            </a>
                        </li>
                    </div>
                    <div className="flex-grow h-px bg-black "></div> {/* Added ml-4 for spacing */}
                </div>
            </div>

        </div>
    );
}

export default ContactPage;
