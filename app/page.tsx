import Image from "next/image";
import Navbar from "./components/navbar";
import Main from "./components/main";
import localFont from 'next/font/local'


export default function Home() {
  return (
    <body className="bg-[#F6F5EF] w-full h-full">
          <Navbar />
          <Main />
          <div >
            
          </div>
</body>
  );
}
