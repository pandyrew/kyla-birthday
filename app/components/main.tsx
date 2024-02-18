import PhotoWindow from "./photo-window"

export default function Main() {
    return (
        <div className="h-full w-full ">
                <div className="font-ander tracking-wide h-[30%] flex-col p-10 items-center 
                                text-center text-[#494F48] text-6.5xl font-ultrabold mb-8 sticky 
                                top-20 flex justify-center h-screen/2 w-full z-1">
                    <div className="relative">
                        lets celebrate 18 years of
                    </div>
                    <div className="relative font-ander -mt-3">
                        Kyla
                    </div>
                
                </div>
            <div className="w-full h-full p-10 ">
                <div className="z-10 w-full columns-3 h-[800px]">
                    <div className="absolute right-[50%] top-[50%] translate-x-1/2">
                        <PhotoWindow
                            name="/kyla-photos/kyla1.jpeg"
                            w={400}
                            //z={1}
                        ></PhotoWindow>
                    </div>
                </div>
               

                <div className="relative ml-1 z-100 top-[200px] -right-[69%]">
                    <PhotoWindow
                        name="/kyla-photos/kyla-g2.jpeg"
                        w={300}
                    ></PhotoWindow>
                </div>
                <div className="relative ml-1 z-5 -top-[398px] -right-[78%]">
                    <PhotoWindow
                        name="/kyla-photos/kyla-g.jpeg"
                        w={250}
                    ></PhotoWindow>
                </div>
                <div className="relative -top-[400px] -right-[35%] ml-1 z-3">
                    <PhotoWindow
                        name="/kyla-photos/kyla-g3.jpeg"
                        w={300}
                    ></PhotoWindow>
                </div>
                <div className="relative ml-1 z-3 -top-[700px] left-[5%]">
                    <PhotoWindow
                        name="/kyla-photos/kyla-g5.jpeg"
                        w={400}
                    ></PhotoWindow>
                </div>
                <div className="relative ml-1 z-3 left-[22%] -top-[900px]">
                    <PhotoWindow
                        name="/kyla-photos/kyla-g4.jpeg"
                        w={300}
                    ></PhotoWindow>
                </div>

                
                <div className="relative -top-[650px]"> {/*fashionista*/}
                    <div className="relative ml-1 z-100 top-[200px] -right-[44%]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-f.jpeg"
                            w={300}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-5 -top-[398px] -right-[78%]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-f2.jpeg"
                            w={250}
                        ></PhotoWindow>
                    </div>
                    <div className="relative -top-[500px] -right-[60%] ml-1 z-3">
                        <PhotoWindow
                            name="/kyla-photos/kyla-f3.jpeg"
                            w={300}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-3 -top-[900px] left-[5%]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-f4.jpeg"
                            w={400}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-3 left-[43%] -top-[1000px]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-f5.jpeg"
                            w={200}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-3 left-[22%] -top-[1300px]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-f6.jpeg"
                            w={300}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-3 left-[10%] -top-[1600px]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-f7.jpeg"
                            w={250}
                        ></PhotoWindow>
                    </div>
                </div>

                <div className="relative -top-[1950px]"> {/*silly*/}
                    <div className="relative ml-1 z-100 top-[50px] left-[0%]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-s.jpeg"
                            w={300}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-5 -top-[250px] -right-[78%]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-s2.jpeg"
                            w={250}
                        ></PhotoWindow>
                    </div>
                    <div className="relative -top-[400px] -right-[55%] ml-1 z-3">
                        <PhotoWindow
                            name="/kyla-photos/kyla-s3.jpeg"
                            w={300}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-3 -top-[800px] left-[15%]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-s4.jpeg"
                            w={200}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-3 -right-[70%] -top-[1050px]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-s5.jpeg"
                            w={300}
                        ></PhotoWindow>
                    </div>
                </div>
                <div className="relative -top-[2600px] "> {/*barista*/}
                    <div className="relative ml-1 z-100 top-[200px] -right-[69%]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-g2.jpeg"
                            w={300}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-5 -top-[398px] -right-[78%]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-g.jpeg"
                            w={250}
                        ></PhotoWindow>
                    </div>
                    <div className="relative -top-[400px] -right-[35%] ml-1 z-3">
                        <PhotoWindow
                            name="/kyla-photos/kyla-g3.jpeg"
                            w={300}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-3 -top-[700px] left-[5%]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-g5.jpeg"
                            w={400}
                        ></PhotoWindow>
                    </div>
                    <div className="relative ml-1 z-3 left-[22%] -top-[900px]">
                        <PhotoWindow
                            name="/kyla-photos/kyla-g4.jpeg"
                            w={300}
                        ></PhotoWindow>
                    </div>
                </div>
            </div>
        </div>
    )
}