'use client'
import Navbar from "../components/navbar";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Page() {
    const [currentTime, setCurrentTime] = useState('');
    const [selectedPoem, setSelectedPoem] = useState('sonnet'); // 'sonnet' or 'haiku'

    useEffect(() => {
        function updateTime() {
            const time = new Date();
            let correctSeconds = time.getSeconds().toString().padStart(2, '0');
            let correctHour = time.getHours();
            let correctMinutes = time.getMinutes().toString().padStart(2, '0');
            let whichHalf = correctHour >= 12 ? 'pm' : 'am';

            correctHour = correctHour % 12 || 12;
            
            setCurrentTime(`${correctHour}:${correctMinutes}:${correctSeconds} ${whichHalf}`);
        }

        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-full bg-[#F6F5EF] absolute">
            <Navbar />
            <div className="w-full h-auto top-16 absolute bg-[#F6F5EF]">
                <div className="w-[50%] left-[25%] h-[1000px] relative flex flex-col gap-3">
                    <div className="text-7xl text-[#494F48] font-ultrabold font-ander tracking-wide justify-center flex flex-row mt-10">
                        About
                    </div>
                    <div className="text-[#767F74] w-full h-[10%] flex justify-center items-center flex-col font-arial">
                        <div>
                            Didn't think just plain text would be enough.
                        </div>
                        <div>
                            So here's a <span className="font-bold">sonnet</span> about the time we first met and a <span className="font-bold">haiku</span> about how she thinks she's a <span className="text-[#DD9E9E]">cat</span>-<span className="text-[#93BDDB]">mermaid</span>-<span className="text-[#9AAE9B]">bunny</span> hybrid.
                        </div>
                    </div>
                    
                    <div className="w-full h-[60%] border-t-2 border-[#BABABA] p-3 pt-6">
                        <div className="w-[60%] h-[10%] relative left-[20%] flex flex-row justify-around text-[#494F48] mt-5">
                            <button 
                                onClick={() => setSelectedPoem('sonnet')}
                                className={`bg-[#E9E9E9] w-[30%] h-full rounded-md flex justify-center items-center font-ander tracking-wide ${selectedPoem === 'sonnet' ? 'border-3 border-[#BABABA]' : 'hover:border-3 hover:border-[#BABABA]'}`}
                            >
                                Sonnet
                            </button>
                            <button 
                                onClick={() => setSelectedPoem('haiku')}
                                className={`bg-[#E9E9E9] w-[30%] h-full rounded-md flex justify-center items-center font-ander tracking-wide ${selectedPoem === 'haiku' ? 'border-3 border-[#BABABA]' : 'hover:border-3 hover:border-[#BABABA]'}`}
                            >
                                Haiku
                            </button>
                        </div>
                        <div className="w-[60%] h-[100%] left-[20%] relative mt-7 items-center flex flex-col mb-10">
                            <Image
                                src={selectedPoem === 'sonnet' ? "/poems/sonnet1.png" : "/poems/haiku.png"}
                                width={selectedPoem === 'sonnet' ? 450 : 300}
                                height={500}
                                alt={selectedPoem === 'sonnet' ? "Sonnet" : "Haiku"}
                            />
                        </div>
                    </div>
                </div>

                {/*footer*/}
                <div className="mt-4 border-t-2 border-[#867272] relative h-auto bottom-[0%] w-[70%] left-[15%]">
                    <div className="w-full relative h-[auto] flex justify-between items-center flex-row mb-[300px] font-inter tracking-wider text-[#767F74] pt-5">
                        <div>
                            <div className='mb-3 flex text-[#867272]'>
                                {currentTime} <p className="ml-1">pst.</p>
                            </div>
                            <p>made with <span className="text-[#DD9E9E]">love</span> by <span className="text-[#5E9AC6]">andrew</span> and <span className="text-[#DD9E9E]">kyla&apos;s</span> favorite<span className="text-[#9AAE9B] ml-[5px]">fonts</span></p>
                            <p><span className="text-[#5E9AC6]">pandy430</span>@gmail.com</p>
                        </div>
                        <a href='https://github.com/pandyrew/kyla-birthday' className="w-[40px] h-[40px]">
                            <Image 
                                src="/github.png"
                                sizes="100vw"
                                width={0}
                                height={0}        
                                alt="GitHub"      
                                style={{ width: "100%", height: "auto" }}                  
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 