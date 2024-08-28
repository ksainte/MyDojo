import React from 'react';
import Schedule from './components/Schedule';
import images from "./images";
import Image from "next/image";

const DisciplineStyle = {
    objectFit: 'cover',
    width: '100%',  // Equivalent to `w-full`
  height: '35rem', // Equivalent to `h-60` (Tailwind's `h-60` is typically `15rem`)
  };

const ProfesseursPage = () => {
    return (
        <div className="flex-col pb-10">
            <div className="bg-black w-full text-white flex items-center flex-col py-10">
                <div className="lg:text-4xl xl:text-6xl 2xl:text-8xl font-mono text-black">
                    <span className="stroke-white stroke-2 text-stroke">PROFESSEURS</span>
                </div>
                <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono font-family: ui-monospace italic">
                    Shidostudio's professors.
                </div>
            </div>

            <div className="flex justify-center w-full mt-10">
                <div className="flex justify-evenly items-center w-full max-w-screen-2xl gap-10">
                    <div className="flex flex-col">
                        <Image src={images.d1}  style={DisciplineStyle} alt="gallery_image"/>
                        <div className="bg-black flex flex-col gap-2 p-10 text-white items-center">
                            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace">YULI NAGATA</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">professeur karate, K1, MMA</div>
                            <div className="lg:text-medium xl:text-base 2xl:text-lg font-mono	font-family: ui-monospace">
                            Enim neque volutpat ac tincidunt vitae semper. Id diam vel quam elementum pulvinar etiam non.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Image src={images.d1}  style={DisciplineStyle} alt="gallery_image"/>
                        <div className="bg-black flex flex-col gap-2 p-10 text-white items-center">
                            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace">ARTHUR BUYSSENS</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">professeur karate, K1 </div>
                            <div className="lg:text-medium xl:text-base 2xl:text-lg font-mono	font-family: ui-monospace">
                            Enim neque volutpat ac tincidunt vitae semper. Id diam vel quam elementum pulvinar etiam non.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Image src={images.d1}  style={DisciplineStyle} alt="gallery_image"/>   
                        <div className="bg-black flex flex-col gap-2 p-10 text-white items-center">
                            <div className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace">MARWAN OIHDI</div>
                            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">assistant professeur kids</div>
                            <div className="lg:text-medium xl:text-base 2xl:text-lg font-mono	font-family: ui-monospace">
                            Enim neque volutpat ac tincidunt vitae semper. Id diam vel quam elementum pulvinar etiam non.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfesseursPage;
