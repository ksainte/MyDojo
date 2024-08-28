import React from 'react';

const CotisationPage = () => {
    return (
        <div className="flex flex-col items-center"> {/* Outer container with flex to center content horizontally */}
            <div className="bg-black w-full text-white flex items-center flex-col py-10">
                <div className="lg:text-4xl xl:text-6xl 2xl:text-8xl font-mono text-black">
                    <span className="stroke-white stroke-2 text-stroke">COTISATION</span>
                </div>
                <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono font-family: ui-monospace italic">
                    Shidostudio'cotisation plans.
                </div>
            </div>

            <div className="flex justify-center w-full mt-10">
                <div className="flex justify-evenly items-center w-full max-w-screen-2xl border background p-3">
                    <div className="flex flex-col">
                        <div className="bg-white p-3">
                            <div className="border border-black flex flex-col gap-2 p-16 bg-white items-center">
                                <div className="flex gap-2 items-center">
                                    <div className="lg:text-lg xl:text-xl 2xl:text-2xl">tarif</div>
                                    <div className="underline font-bold lg:text-xl xl:text-2xl 2xl:text-3xl">ADULTE</div>
                                </div>
                                <div className="lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-green-500">65€</div>
                                <div className="lg:text-lg xl:text-xl 2xl:text-2xl">/mois</div>
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
                            <div className="border border-black flex flex-col gap-2 p-16 bg-white items-center">
                                <div className="flex gap-2 items-center">
                                    <div className="lg:text-lg xl:text-xl 2xl:text-2xl">tarif</div>
                                    <div className="underline font-bold lg:text-xl xl:text-2xl 2xl:text-3xl">ADULTE</div>
                                </div>
                                <div className="lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-green-500">650€</div>
                                <div className="lg:text-lg xl:text-xl 2xl:text-2xl">/an</div>
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
                            <div className="border border-black flex flex-col gap-2 p-16 bg-white items-center">
                                <div className="flex gap-2 items-center">
                                    <div className="lg:text-lg xl:text-xl 2xl:text-2xl">tarif</div>
                                    <div className="underline font-bold lg:text-xl xl:text-2xl 2xl:text-3xl">ENFANT</div>
                                </div>
                                <div className="lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-green-500">75€</div>
                                <div className="lg:text-lg xl:text-xl 2xl:text-2xl">/mois</div>
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
                        <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono font-family: ui-monospace">+ 50€ de frais d’assurance</div>
                        <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono font-family: ui-monospace">+ 50€ de frais de licence</div>
                        <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono font-family: ui-monospace">/ an</div>
                        <div className="w-full h-px bg-black "></div> 
                    </div>
            </div>
            <div className="flex justify-center w-full mt-10">
                    <div className="w-full max-w-screen-2xl flex items-center flex-col gap-5 background border p-3">
                        <div className="lg:text-lg xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace">COURS PRIVÉ</div>
                        <div className="lg:text-3xl xl:text-4xl 2xl:text-5xl font-mono font-family: ui-monospace font-bold text-green-500">50€</div>
                        <div className="lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace">/heure</div>
                    </div>
            </div>
    </div>
    );
}

export default CotisationPage;
