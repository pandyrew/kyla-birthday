'use client'
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import PhotoWindow from "@/app/components/photo-window";

export default function Page() {
    function FolderHover() {
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
    }
    function selectedFolder() {
        return (
            <div className='min-w-[175px]'>
                <Image src="/folder-open.png" width={175} height={100} alt="logo" />

            </div>
        )  
    }
    setInterval(updateTime, 1000)

    const [currentTime, setCurrentTime] = useState('')

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
            <div className="w-[70%] h-full left-[15%] relative mt-10 flex flex-col justify-center items-center">
                    <h1 className="text-7xl text-[#494F48] font-ultrabold font-ander tracking-wide">Selected Works</h1>
                    <p className="font-bold font-ander text-[#767F74]">2023-2024</p>
                    <div className=" w-full h-[120px] mt-5">
                        <Link href="/photography/hawaii" className="absolute left-0 text-[#494F48] w-[150px] font-inter font-semibold flex-col justify-center items-center">{FolderHover()}<span className="flex items-center justify-center">{"Hawai'i (2023)"}</span></Link>
                        <Link href="/photography/seattle" className="absolute left-[22%] text-[#494F48] w-[150px] font-inter font-semibold flex-col justify-center items-center">{selectedFolder()}<span className="flex items-center justify-center">{'Seattle (2024)'} </span></Link>
                        <Link href="/photography/bay-area" className="flex min-w-[175px] absolute right-[50%] translate-x-1/2 text-[#494F48] w-[150px] font-inter font-semibold flex-col justify-center items-center">{FolderHover()}<span className="flex items-center justify-start w-[150px]">{'Bay Area (2023)'}</span></Link>
                        <Link href="/photography/monterey" className="absolute right-[22%] text-[#494F48] w-[150px] font-inter font-semibold flex-col justify-center items-center">{FolderHover()}<span className="flex items-center justify-center">{'Monterey (2024)'}</span></Link>
                        <Link href="/photography/misc" className="absolute right-0 text-[#494F48] w-[150px] font-inter font-semibold flex-col justify-center items-center">{FolderHover()}<span className="flex items-center justify-center">{'Misc (2023)'}</span></Link>
                    </div>
            </div>  
            <div className="flex flex-row justify-center gap-8 relative h-[400px] bottom-[0%] mt-[110px] w-[70%] left-[15%]">
                
                
                <div className="">
                    <PhotoWindow
                w={250}
                name="/seattle/drink.jpeg"
                />
                </div>
                <div className="">
                    <PhotoWindow
                w={449}
                name="/seattle/blue.jpg"
                />
                </div>
                <div className="">
                    <PhotoWindow
                w={195}
                name="/seattle/heart.PNG"
                />
                </div>
            </div> 
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