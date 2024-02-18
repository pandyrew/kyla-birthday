import Image from "next/image";
export default function Navbar() {
    return (

    <div className="bg-[#F6F5EF] w-full h-16 z-10 border-2 border-b-[#7B7B7B] fixed items-center">
        <div className='tracking-wider font-grand fixed right-[46.9%] top-5 text-lg flex flex-row items-center'>
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
        </div>
            
        <div className="w-full h-full flex flex-row justify-between items-center p-7">
            <div className="flex flex-row gap-12 font-ander font-bold">
                <div>
                    photography
                </div>
                <div>
                    about
                </div>
            </div>
            <a href="#">
                <Image 
                src="/insta-icon.png"
                width="30"
                height="30"
                alt="asdf"
                />
            </a>
            </div>
        
    </div>

    );
}