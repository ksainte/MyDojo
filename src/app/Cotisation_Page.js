import React from 'react';

const CotisationPage = () => {
    return (
        <div className="flex-col">
            <div className="bg-black w-full text-white flex items-center flex-col py-10">
                <div className="lg:text-4xl xl:text-6xl 2xl:text-8xl font-mono text-black">
                    <span className="stroke-white stroke-2 text-stroke">COTISATION</span>
                </div>
                <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono font-family: ui-monospace italic">
                    Shidostudio'cotisation plans.
                </div>
            </div>
            <div className= "flex-col justify-center items-center">
            <div className= "flex max-w-screen-2xl justify-evenly background items-center border border-red-500">
                <div className="border border-black flex flex-col gap-2 p-10 bg-white">
                    <div className="flex gap-2">
                    <div>
                        tarif
                    </div>
                    <div>
                    ADULTE
                    </div>
                    </div>
                    <div>
                        65eur
                    </div>
                    <div>
                        /mois
                    </div>
                </div>
                <div className="border border-black flex flex-col gap-2 p-10 bg-white">
                <div className="flex gap-2">
                    <div>
                        tarif
                    </div>
                    <div>
                    ADULTE
                    </div>
                    </div>
                    <div>
                        65eur
                    </div>
                    <div>
                        /mois
                    </div>
                </div>
                <div className="border border-black flex flex-col gap-2 p-10 bg-white">
                    <div className="flex gap-2">
                    <div>
                        tarif
                    </div>
                    <div>
                    ENFANT
                    </div>
                    </div>
                    <div>
                        65eur
                    </div>
                    <div>
                        /mois
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CotisationPage;
