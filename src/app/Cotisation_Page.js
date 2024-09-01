import React from 'react';

const CotisationPage = () => {
    return (
        <div className="flex flex-col items-center pb-10">
            <div className="bg-black w-full text-white flex items-center flex-col py-10 gap-4 max-md:py-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-black ">
                <span className="stroke-white stroke-2 text-stroke">COTISATION</span>
                </div>
                <div className="max-lg:text-center xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace italic max-lg:px-4">
                Shidostudio'cotisation plans.
                </div>
            </div>

            <div className="flex justify-center w-full mt-10" >
                <div className="flex max-md:flex-col max-md:gap-6 justify-evenly items-center w-full  border background p-3 xxxs:max-w-screen-xxxs xxs:max-w-screen-xxs xs:max-w-screen-xxs md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                    <div className="flex flex-col">
                        <div className="bg-white p-3">
                            <div className="border border-black flex flex-col gap-2 p-16 max-lg:p-8 bg-white items-center">
                                <div className="flex gap-2 items-center">
                                    <div className="xxxs:text-md xxs:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">tarif</div>
                                    <div className="underline font-bold xxxs:text-xl xxs:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-mono">ADULTE</div>
                                </div>
                                <div className="xxxs:text-2xl xxs:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-green-500 ">65€</div>
                                <div className="xxxs:text-lg xxs:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace">/mois</div>
                            </div>
                        </div>
                        <div className="bg-black flex flex-col gap-2 p-10 text-white items-start">
                            <div className="lg:text-base xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">- à partir de 16 ans</div>
                            <div className="lg:text-base xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">- une discipline</div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-white p-3">
                            <div className="border border-black flex flex-col gap-2 p-16 max-lg:p-8 bg-white items-center">
                                <div className="flex gap-2 items-center">
                                <div className="xxxs:text-md xxs:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">tarif</div>
                                <div className="underline font-bold xxxs:text-xl xxs:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-mono">ADULTE</div>
                                </div>
                                <div className="xxxs:text-2xl xxs:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-green-500">650€</div>
                                <div className="xxxs:text-lg xxs:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace">/an</div>
                            </div>
                        </div>
                        <div className="bg-black flex flex-col gap-2 p-10 text-white items-start">
                            <div className="lg:text-base xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">- à partir de 16 ans</div>
                            <div className="lg:text-base xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">- une discipline</div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-white p-3">
                            <div className="border border-black flex flex-col gap-2 p-16 max-lg:p-8 bg-white items-center">
                                <div className="flex gap-2 items-center">
                                <div className="xxxs:text-md xxs:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">tarif</div>
                                <div className="underline font-bold xxxs:text-xl xxs:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-mono">ENFANT</div>
                                </div>
                                <div className="xxxs:text-2xl xxs:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-green-500">75€</div>
                                <div className="xxxs:text-lg xxs:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace">/mois</div>
                            </div>
                        </div>
                        <div className="bg-black flex flex-col gap-2 p-10 text-white items-start">
                            <div className="lg:text-base xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">- de 5 à 15 an</div>
                            <div className="lg:text-base xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">- karaté shidokan</div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full mt-10">
                    <div className="w-full max-w-screen-2xl flex items-center flex-col gap-5">
                        <div className="w-full h-px bg-black "></div> 
                        <div className="xxxs:text-md xxs:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-mono font-family: ui-monospace">+ 50€ de frais d’assurance</div>
                        <div className="xxxs:text-md xxs:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-mono font-family: ui-monospace">+ 50€ de frais de licence</div>
                        <div className="xxxs:text-lg xxs:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace">/ an</div>
                        <div className="w-full h-px bg-black "></div> 
                    </div>
            </div>
            <div className="flex justify-center w-full mt-10">
                    <div className="w-full max-w-screen-2xl flex items-center flex-col gap-5 background border p-3">
                        <div className="xxxs:text-xl xxs:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-mono font-family: ui-monospace underline">COURS PRIVÉ</div>
                        <div className="xxxs:text-2xl xxs:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-green-500">50€</div>
                        <div className="xxxs:text-lg xxs:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace">/heure</div>
                    </div>
            </div>
    </div>
    );
}

export default CotisationPage;
