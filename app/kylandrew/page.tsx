'use client'
import Navbar from "../components/navbar";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import PhotoWindow from "../components/photo-window";

export default function Page() {
    /*function folderHover() {
        const [isHovering, setIsHovered] = useState(false);
        const onMouseEnter = () => setIsHovered(true);
        const onMouseLeave = () => setIsHovered(false);
        return (
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='min-w-[175px]'>
              {isHovering ? (
                <Image src="/folder-open.png" width={175} height={100} alt="logo" />
              ) : (
                <Image src="/folder-closed.png" width={150} height={100} alt="logo" />
              )}
          </div>
        )
    }*/
    setInterval(updateTime, 1000)

    const [currentTime, setCurrentTime] = useState('')
    const [may, setMay] = useState(['', ''])
    const [june, setJune] = useState(['', ''])
    const [july, setJuly] = useState(['', ''])
    const [november, setNovember] = useState(['', ''])
    const [december, setDecember] = useState(['', ''])

    if (typeof window !== "undefined") {
    window.addEventListener('scroll', ()=>
    {
        const scrolled = window.scrollY
        console.log(scrolled)
        if (scrolled <= 551){
            setMay(['700', '#DD9E9E'])
            setJune(['', ''])
            setJuly(['', ''])
            setNovember(['', ''])
            setDecember(['', ''])
        }
        else
        if (scrolled >= 550 && scrolled < 1563){
            setMay(['', ''])
            setJune(['700', '#E0DB5E'])
            setJuly(['', ''])
            setNovember(['', ''])
            setDecember(['', ''])

        }
        else
        if (scrolled >= 1563 && scrolled < 2500){
            setMay(['', ''])
            setJune(['', ''])
            setJuly(['700', '#93BDDB'])
            setNovember(['', ''])
            setDecember(['', ''])

        }
        else
        if (scrolled >= 2500 && scrolled < 3550){
            setMay(['', ''])
            setJune(['', ''])
            setJuly(['', ''])
            setNovember(['700', '#58835A'])
            setDecember(['', ''])

        }
        else
        if (scrolled >= 3550 && scrolled < 5668){
            setMay(['', ''])
            setJune(['', ''])
            setJuly(['', ''])
            setNovember(['', ''])
            setDecember(['700', '#A15FA3'])
        }
    })}

    function updateTime() {
        var time = new Date();
        var correctSeconds = time.getSeconds().toString();
        var correctHour = time.getHours().toString();
        var correctMinutes = time.getMinutes().toString();
        var whichHalf = 'am'

        if (parseInt(correctMinutes) < 10){
            correctMinutes = "0" + correctMinutes.toString()
        }
        if (parseInt(correctHour) === 0){
            correctHour = '12'
        }
        if (parseInt(correctHour) > 12){
            correctHour = (parseInt(correctHour) - 12).toString()
        }
        if (parseInt(correctSeconds) < 10){
            correctSeconds = "0" + correctSeconds.toString()
        }
        if (parseInt(time.getHours().toString()) > 11){
            whichHalf = 'pm'
        }
        setCurrentTime(correctHour + ":" + correctMinutes + ":" + correctSeconds + " " + whichHalf)
    }
  return (
    <div className="w-full h-full bg-[#F6F5EF] absolute">
        <Navbar />
        <div className="w-full h-auto top-16 absolute bg-[#F6F5EF]">
          <div className="w-[70%] left-[15%] min-h-[1000px] relative flex flex-col gap-2 ">
                  <div className="text-7xl text-[#494F48] font-ultrabold font-ander tracking-wide justify-center items-center text-center flex flex-row mt-10">
                    A Timeline of Our Time Together
                  </div>
                  <div className="text-[#767F74] w-full h-[10%] flex justify-center items-center flex-col font-arial">
                      <div>
                        A quick overview of our time together.
                      </div>
                      
                  </div>
                  
                  <div className=" w-full h-[5210px] mt-6 border-t-2 border-[#BABABA] p-3 pt-6 ">
                    <div className="sticky w-[300px] h-[700px] top-[100px] flex flex-row justify-between items-center">
                            <div className="w-[67%] h-full font-ander text-[#494F48] flex flex-col justify-between items-center p-4">
                                <div style={{fontWeight: 'bold', color: may[1]}}>
                                    May 2023
                                </div>
                                <div style={{fontWeight: 'bold', color: june[1]}}>
                                    June 2023
                                </div>
                                <div style={{fontWeight: 'bold', color: july[1]}}>
                                    July 2023
                                </div>
                                <div style={{fontWeight: 'bold', color: november[1]}}>
                                    November 2023
                                </div>
                                <div style={{fontWeight: 'bold', color: december[1]}}>
                                    December 2023
                                </div>
                            </div>
                            <div className="w-[33%] h-full flex flex-col justify-center items-center">
                                <Image 
                                    src="/timeline.jpeg"
                                    sizes='100vw'
                                    width={0}
                                    height={0}        
                                    alt='asdf'      
                                    style={{ width: "100%", height: "auto" }}                  
                                ></Image>
                            </div>
                    </div>
                    <div className="absolute right-[150px] top-[320px]">
                        <PhotoWindow
                        name='/timeline-pictures/may.jpeg'
                        w={300}
                        ></PhotoWindow>
                    </div>
                    <div className="md:max-2xl:right-[303px] md:max-2xl:top-[770px] absolute right-[650px] 
                    top-[430px] w-[26%] flex flex-col justify-center bg-[#E9E9E9] text-[#494F48] 
                    border-3 border-[#BABABA] font-inter tracking-wide rounded-xl p-5 min-w-[270px] translate-x-1/2">
                        <div className="font-bold pb-3">May</div>
                        <div>On my most memorable day, May 6th, 2023, I met Kyla. In that month of May, since I was leaving for a trip to Korea at the start of June, we squeezed in countless enjoyable dates and soaked up each other&apos;s company.</div>
                    </div>
                    
                    <div className="absolute right-[280px] top-[1500px]">
                        <PhotoWindow
                        name='/timeline-pictures/june2.jpeg'
                        w={210}
                        ></PhotoWindow>
                    </div>
                    <div className="absolute right-[100px] top-[1300px]">
                        <PhotoWindow
                        name='/timeline-pictures/june1.jpeg'
                        w={200}
                        ></PhotoWindow>
                    </div>
                    <div className="md:max-2xl:right-[300px] md:max-2xl:top-[1930px] absolute right-[500px] 
                    top-[1250px] w-[26%] flex flex-col justify-center bg-[#E9E9E9] text-[#494F48] 
                    border-3 border-[#BABABA] font-inter tracking-wide rounded-xl p-5 min-w-[270px] translate-x-1/2">
                        <div className="font-bold pb-3">June</div>
                        <div>We spent June long-distance, but we were still knotted together. I began learning Turkish while always updating kyla about my adventures in Korea.</div>
                        
                    </div>
                    <div className="absolute right-[280px] top-[2300px]">
                        <PhotoWindow
                        name='/timeline-pictures/july1.jpeg'
                        w={210}
                        ></PhotoWindow>
                    </div>
                    <div className="absolute right-[100px] top-[2500px]">
                        <PhotoWindow
                        name='/timeline-pictures/july2.jpeg'
                        w={200}
                        ></PhotoWindow>
                    </div>
                    <div className="md:max-2xl:right-[250px] md:max-2xl:top-[2830px] absolute right-[650px] 
                    top-[2500px] w-[26%] flex flex-col justify-center bg-[#E9E9E9] text-[#494F48] 
                    border-3 border-[#BABABA] font-inter tracking-wide rounded-xl p-5 min-w-[190px] max-w-[230px] translate-x-1/2">
                        <div className="font-bold pb-3">July</div>
                        <div>Reuniting for a few days in July before Kyla headed to Hawawi&apos;i, we planned a trip to the beach and read at the library.</div>
                        
                    </div>
                    <div className="absolute right-[280px] top-[3300px]">
                        <PhotoWindow
                        name='/timeline-pictures/nov1.jpeg'
                        w={210}
                        ></PhotoWindow>
                    </div>
                    <div className="absolute right-[76px] top-[3490px]">
                        <PhotoWindow
                        name='/timeline-pictures/nov2.jpeg'
                        w={200}
                        ></PhotoWindow>
                    </div>
                    <div className="absolute right-[280px] top-[3705px]">
                        <PhotoWindow
                        name='/timeline-pictures/nov3.jpeg'
                        w={210}
                        ></PhotoWindow>
                    </div>
                    <div className="md:max-2xl:right-[167px] md:max-2xl:top-[3928px] absolute right-[600px] 
                    top-[3485px] w-[26%] flex flex-col justify-center bg-[#E9E9E9] text-[#494F48] 
                    border-3 border-[#BABABA] font-inter tracking-wide rounded-xl p-5 min-w-[190px] max-w-[230px] translate-x-1/2">
                        <div className="font-bold pb-3">November</div>
                        <div>Back from Irvine during Thanksgiving Break, we embarked on our long-awaited trip to Palo Alto--with a side of HotPot</div>
                        
                    </div>
                    
                    <div className="absolute right-[76px] top-[4390px]">
                        <PhotoWindow
                        name='/timeline-pictures/dec2.jpeg'
                        w={200}
                        ></PhotoWindow>
                    </div>
                    <div className="absolute right-[270px] top-[4690px]">
                        <PhotoWindow
                        name='/timeline-pictures/dec1.jpeg'
                        w={210}
                        ></PhotoWindow>
                    </div>
                    
                    <div className="absolute right-[450px] md:max-2xl:right-[300px] md:max-2xl:top-[5030px] 
                    top-[4400px] w-[26%] flex flex-col justify-center bg-[#E9E9E9] text-[#494F48] 
                    border-3 border-[#BABABA] font-inter tracking-wide rounded-xl p-5 min-w-[190px] max-w-[230px] translate-x-1/2">
                        <div className="font-bold pb-3">December</div>
                        <div>Back again from college for Winter Break, we fulfilled our wishes to try as much good food as we could. We had amazing Pakistani food, sushi and many more.</div>
                        
                    </div>
                  </div>
          </div>


            {/*footer*/}
            <div className="mt-4 border-t-2 border-[#867272] relative h-auto bottom-[0%] w-[70%] left-[15%] ">
                <div className="w-full relative h-[auto] flex justify-between items-center flex-row mb-[300px] font-inter tracking-wider text-[#767F74] pt-5 ">
                    <div>
                            <div className='mb-3 flex text-[#867272] '>
                                {currentTime} <p className="ml-1">pst.</p>
                            </div>
                            <p>made with <span className="text-[#DD9E9E]">love</span> by <span className="text-[#5E9AC6]">andrew</span> and <span className="text-[#DD9E9E]">kyla&apos;s</span> favorite<span className="text-[#9AAE9B] ml-[5px]">fonts</span></p>
                            <p><span className=" text-[#5E9AC6]">pandy430</span>@gmail.com</p>
                    </div>
                    <a href='https://github.com/pandyrew/kyla-birthday'className="w-[40px] h-[40px]">
                        <Image 
                            src="/github.png"
                            sizes='100vw'
                            width={0}
                            height={0}        
                            alt='asdf'      
                            style={{ width: "100%", height: "auto" }}                  
                        ></Image>   

                    </a>
                    </div>
            </div> 
        </div>
    </div>
  );
}

//<Image src="/folder-open.png" width="100" height="100" alt="asdf" />
//                    