'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
    const Instagram = () => {
        const [isHovering, setIsHovered] = useState(false);
        const onMouseEnter = () => setIsHovered(true);
        const onMouseLeave = () => setIsHovered(false);
        return (
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
              {isHovering ? (
                <Image src="/insta-icon-green.png" width={30} height={30} alt="logo" />
              ) : (
                <Image src="/insta-icon.png" width={30} height={30} alt="logo" />
              )}
          </div>
  );
};

    return (
    
    


    <div className="bg-[#F6F5EF] w-full h-16 z-10 border-2 border-b-[#7B7B7B] hover:border-b-[#D9D9D9] fixed items-center">
        <Link href="/" className='tracking-wider font-grand fixed right-[46.9%] top-5 text-lg flex flex-row items-center'>
            <div className="text-[#373634]">
                kyla ulu
            </div>
            <div className=" pb-1.5">
                <Image 
                src="/g-turkish.jpeg"
                width="24"
                height="24"
                alt="asdf"
                />
            </div>
        </Link>
        <div className="w-full h-full flex flex-row justify-between items-center p-7">
            <div className="flex flex-row gap-12 font-ander font-bold">
                <Link href='/photography' className="hover:text-[#DD9E9E]">
                    photography
                </Link>
                <Link href='/about/sonnet' className="hover:text-[#E0DB5E]">
                    about
                </Link>
                <Link href='/kylandrew' className="hover:text-[#93BDDB]">
                    kyla+andrew
                </Link>
            </div>
            <a href="https://www.instagram.com/kylaulug/}">
                <Instagram>

                </Instagram>
            </a>
            </div>
        
    </div>

    );
}