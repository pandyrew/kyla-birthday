'use client'
import Navbar from "../../components/navbar";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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
          <div className="w-[50%] left-[25%] h-[1000px] relative flex flex-col gap-3 ">
                  <div className="text-7xl text-[#494F48] font-ultrabold font-ander tracking-wide justify-center flex flex-row mt-10">
                    About
                  </div>
                  <div className="text-[#767F74] w-full h-[10%] flex justify-center items-center flex-col font-arial">
                      <div>
                        Didnt think just plain text would be enough.
                      </div>
                      <div>
                        So heres a <span className="font-bold">sonnet</span> about the time we first met and a <span className="font-bold">haiku</span> about how she thinks shes a <span className="text-[#DD9E9E]">cat</span>-<span className="text-[#93BDDB]">mermaid</span>-<span className="text-[#9AAE9B]">bunny</span> hybrid.
                      </div>
                  </div>
                  
                  <div className=" w-full h-[60%] border-t-2 border-[#BABABA] p-3 pt-6">
                    <div className=" w-[60%] h-[10%] relative left-[20%] flex flex-row justify-around text-[#494F48] mt-5">
                      <Link href='/about/sonnet' className="bg-[#E9E9E9] hover:border-3 hover:border-[#BABABA]  w-[30%] h-full rounded-md flex justify-center items-center font-ander tracking-wide">
                        Sonnet
                      </Link>
                      <Link href='/about/haiku' className="bg-[#E9E9E9] border-3 border-[#BABABA]  w-[30%] h-full rounded-md flex justify-center items-center font-ander tracking-wide">
                        Haiku
                      </Link>

                    </div>
                    <div className=" w-[60%] h-[100%] left-[20%] top-[30%] relative mt-7 items-center flex flex-col mb-10">
                      <Image
                      src="/poems/haiku.png"
                      width={300}
                      height={500}
                      alt="asdf"
                      />

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