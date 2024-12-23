"use client";

import PhotoWindow from "./photo-window";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HTMLInputTypeAttribute } from "react";
import CommentCard from "./comment-card";
import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import { commentsCollection, addComment } from "../lib/controller";
import CatCard from "./cat-card";

export default function Main() {
  const Github = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {isHovering ? (
          <Image src="/github-y.png" width={30} height={30} alt="logo" />
        ) : (
          <Image src="/github.png" width={30} height={30} alt="logo" />
        )}
      </div>
    );
  };
  const [commentCount, setCommentCount] = useState(0);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      commentsCollection,
      (snapshot: QuerySnapshot<DocumentData>) => {
        setCommentCount(snapshot.size);
      }
    );

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(0);
  const descriptors = [
    "kyla",
    "beauty",
    "style",
    "sillyness!",
    "barista moments",
    "loved ones",
  ];
  const colorDescriptors = [
    "#58835A",
    "#84567F",
    "#5E9AC6",
    "#D1AB4B",
    "#533C35",
    "#DD9E9E",
  ];
  const [commentCountVarible, setCommentCountVariable] = useState("");

  const [word, setWord] = useState("kyla");
  const [random, setRandom] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled <= 473.5) {
        setWord(descriptors[0]);
        setCommentCountVariable(colorDescriptors[0]);
      } else if (scrolled >= 473.5 && scrolled < 1563) {
        setWord(descriptors[1]);
        setCommentCountVariable(colorDescriptors[1]);
      } else if (scrolled >= 1563 && scrolled < 3437) {
        setWord(descriptors[2]);
        setCommentCountVariable(colorDescriptors[2]);
      } else if (scrolled >= 3437 && scrolled < 4586) {
        setWord(descriptors[3]);
        setCommentCountVariable(colorDescriptors[3]);
      } else if (scrolled >= 4586 && scrolled < 5668) {
        setWord(descriptors[4]);
        setCommentCountVariable(colorDescriptors[4]);
      } else if (scrolled >= 5668) {
        setWord(descriptors[5]);
        setCommentCountVariable(colorDescriptors[5]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const time = new Date();
      let correctSeconds = time.getSeconds().toString().padStart(2, '0');
      let correctHour = time.getHours();
      let correctMinutes = time.getMinutes().toString().padStart(2, '0');
      let whichHalf = correctHour >= 12 ? "pm" : "am";

      // Convert to 12-hour format
      correctHour = correctHour % 12 || 12;

      setCurrentTime(
        `${correctHour}:${correctMinutes}:${correctSeconds} ${whichHalf}`
      );
    };

    const intervalId = setInterval(updateTime, 1000);
    updateTime(); // Initial call

    return () => clearInterval(intervalId);
  }, []);

  const commentCountStyle = {
    color: commentCountVarible,
  };

  const [fontNumber, setFontNumber] = useState(0);
  const [revolvingFont, setRevolvingFont] = useState("aurora");
  const fontStyle = {
    fontFamily: revolvingFont,
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value);
  };
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleButtonClick = () => {
    if (name === "" || content === "") {
      return;
    }
    
    addComment({
      name,
      content,
      cat: random,
      counter: commentCount + 1,
    });
    
    setName("");
    setContent("");
  };

  const handleCatClick = () => {
    setRandom(prev => prev === 4 ? 0 : prev + 1);
  };
  const [number, setNumber] = useState(0);

  if (typeof window !== "undefined") {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  function Cat(number: any) {
    if (number === 1) {
      return (
        <Image
          src="/cat-cafe-cats/black-cat.png"
          width={70}
          height={70}
          alt="logo"
        />
      );
    } else if (number === 2) {
      return (
        <Image
          src="/cat-cafe-cats/blue-cat.png"
          width={70}
          height={70}
          alt="logo"
        />
      );
    } else if (number === 3) {
      return (
        <Image
          src="/cat-cafe-cats/green-cat.png"
          width={70}
          height={70}
          alt="logo"
        />
      );
    } else if (number === 0) {
      return (
        <Image
          src="/cat-cafe-cats/white-cat.png"
          width={70}
          height={70}
          alt="logo"
        />
      );
    } else if (number === 4) {
      return (
        <Image
          src="/cat-cafe-cats/yellow-cat.png"
          width={70}
          height={70}
          alt="logo"
        />
      );
    }
  }

  return (
    <div className="h-full w-full ">
      <div
        className="font-ander tracking-wide h-[30%] flex-col p-10 items-center 
                                text-center text-[#494F48] text-6.5xl font-ultrabold mb-[250px] sticky 
                                top-20 flex justify-center h-screen/2 w-full "
      >
        <div className="relative">lets celebrate 18 years of</div>
        <div className="text-[#58835A] relative font-ander -mt-3">
          <span style={commentCountStyle}>{word}</span>
        </div>
      </div>
      <div className=" w-full h-full p-10 max-h-[7500px]  border-b-2 border-[#6B6B6B]">
        <div className="z-10 w-full columns-3 h-[800px]">
          <div className="absolute right-[50%] top-[50%] translate-x-1/2">
            <PhotoWindow
              name="/kyla-photos/kyla1.jpeg"
              w={400}
              //z={1}
            ></PhotoWindow>
          </div>
        </div>

        <div className="relative ml-1 z-100 top-[200px] left-[69%] max-w-[300px]">
          <PhotoWindow name="/kyla-photos/kyla-g2.jpeg" w={300}></PhotoWindow>
        </div>
        <div className="relative ml-1 z-5 -top-[398px] left-[78%] max-w-[250px]">
          <PhotoWindow name="/kyla-photos/kyla-g.jpeg" w={250}></PhotoWindow>
        </div>
        <div className="relative -top-[400px] left-[35%] ml-1 z-3 max-w-[300px]">
          <PhotoWindow name="/kyla-photos/kyla-g3.jpeg" w={300}></PhotoWindow>
        </div>
        <div className="relative ml-1 z-3 -top-[700px] left-[5%] max-w-[400px]">
          <PhotoWindow name="/kyla-photos/kyla-g5.jpeg" w={400}></PhotoWindow>
        </div>
        <div className="relative ml-1 z-3 left-[22%] -top-[900px] max-w-[300px]">
          <PhotoWindow name="/kyla-photos/kyla-g4.jpeg" w={300}></PhotoWindow>
        </div>

        <div className="relative -top-[650px]">
          {" "}
          {/*fashionista*/}
          <div className="relative ml-1 z-100 top-[200px] left-[44%] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-f.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-5 -top-[398px] left-[78%] max-w-[250px]">
            <PhotoWindow name="/kyla-photos/kyla-f2.jpeg" w={250}></PhotoWindow>
          </div>
          <div className="relative -top-[500px] left-[60%] ml-1 z-3 max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-f3.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 -top-[900px] left-[5%] max-w-[400px]">
            <PhotoWindow name="/kyla-photos/kyla-f4.jpeg" w={400}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[43%] -top-[1000px] max-w-[200px]">
            <PhotoWindow name="/kyla-photos/kyla-f5.jpeg" w={200}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[22%] -top-[1300px] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-f6.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[10%] -top-[1600px] max-w-[250px]">
            <PhotoWindow name="/kyla-photos/kyla-f7.jpeg" w={250}></PhotoWindow>
          </div>
        </div>

        <div className="relative -top-[1950px]">
          {" "}
          {/*silly*/}
          <div className="relative ml-1 z-100 top-[50px] left-[0%] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-s.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-5 -top-[250px] left-[78%] max-w-[250px]">
            <PhotoWindow name="/kyla-photos/kyla-s2.jpeg" w={250}></PhotoWindow>
          </div>
          <div className="relative -top-[400px] left-[55%] ml-1 z-3 max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-s3.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 -top-[800px] left-[15%] max-w-[200px]">
            <PhotoWindow name="/kyla-photos/kyla-s4.jpeg" w={200}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[70%] -top-[1050px] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-s5.jpeg" w={300}></PhotoWindow>
          </div>
        </div>
        <div className="relative -top-[2600px] ">
          {" "}
          {/*barista*/}
          <div className="relative ml-1 z-100 top-[200px] left-[60%] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-d.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-5 -top-[398px] left-[78%] max-w-[250px]">
            <PhotoWindow name="/kyla-photos/kyla-d2.jpeg" w={250}></PhotoWindow>
          </div>
          <div className="relative -top-[700px] left-[37%] ml-1 z-3 max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-d3.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 -top-[1300px] left-[3%] max-w-[350px]">
            <PhotoWindow name="/kyla-photos/kyla-d4.jpeg" w={350}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[22%] -top-[1500px] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-d5.jpeg" w={300}></PhotoWindow>
          </div>
        </div>
        <div className="relative -top-[3500px] max-h-[1600px] ">
          {" "}
          {/*loved ones*/}
          <div className="relative ml-1 z-100 -top-[200px] left-[80%] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-l.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-5 -top-[250px] left-[78%] max-w-[250px]">
            <PhotoWindow name="/kyla-photos/kyla-l2.jpeg" w={250}></PhotoWindow>
          </div>
          <div className="relative -top-[300px] left-[80%] ml-1 z-3 max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-l3.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 -top-[1100px] left-[3%] max-w-[250px]">
            <PhotoWindow name="/kyla-photos/kyla-l4.jpeg" w={250}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[5%] -top-[1120px] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-l5.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[0%] -top-[1150px] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-l6.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[78%] -top-[1200px] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-l7.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[5%] -top-[1660px] max-w-[250px]">
            <PhotoWindow name="/kyla-photos/kyla-l8.jpeg" w={250}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[0%] -top-[1700px] max-w-[300px]">
            <PhotoWindow name="/kyla-photos/kyla-l9.jpeg" w={300}></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[4%] -top-[1720px] max-w-[350px]">
            <PhotoWindow
              name="/kyla-photos/kyla-l10.jpeg"
              w={350}
            ></PhotoWindow>
          </div>
          <div className="relative ml-1 z-3 left-[80%] -top-[2100px] max-w-[300px]">
            <PhotoWindow
              name="/kyla-photos/kyla-l11.jpeg"
              w={300}
            ></PhotoWindow>
          </div>
        </div>
        <div className="flex justify-center w-full -top-[3500px] min-h-[1000px] relative flex-col">
          <div
            className="text-[#494F48] font-ander flex 
                                    text-center font-ultrabold text-6.5xl flex-col w-[60%] left-[20%] relative "
          >
            <div className="flex flex-col justify-between ">
              <div className="flex flex-col gap-4 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-4xl font-ander font-ultrabold text-[#494F48]">
                    <span>{commentCount}</span>
                    <span>Birthday Wishes So Far</span>
                    <span className="text-[#DD9E9E]">...</span>
                  </div>
                  
                  <div className="mt-3 text-xl font-bold text-[#767F74]">
                    add a birthday wish below and join the cafe as a cat!{" "}
                    <span className="block mt-1">
                      tell <span className="text-[#9AAE9B]">Kyla</span> in person too of course
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[#767F74] mb-1 min-h-[60px] h-auto text-xl -mt-3 font-bold w-full justify-start flex">
                <Image src="/clickme2.png" width={125} height={60} alt="asdf" />
              </div>
            </div>
            <div className="h-auto w-full flex flex-row gap-4 ">
              <div className="mt-1">
                <div onClick={handleCatClick} className="h-auto w-auto">
                  {Cat(random)}
                </div>
              </div>
              <div className="h-auto w-full rounded-xl outline outline-3 outline-[#BABABA] p-4 flex flex-col font-inter">
                <textarea
                  value={name}
                  onChange={(e) => handleNameChange(e)}
                  placeholder="Your name..."
                  rows={1}
                  className="bg-[#F6F5EF] tracking-wide font-ultrabold text-xl p-2 pb-0 w-full h-auto min-h-[45px] border-b-2 border-[#BABABA]"
                ></textarea>
                <textarea
                  value={content}
                  onChange={(e) => handleContentChange(e)}
                  placeholder="Leave a nice note..."
                  rows={5}
                  className="bg-[#F6F5EF] text-[#767F74] font-bold text-xl p-2 pb-1 w-full h-auto min-h-[45px]"
                ></textarea>
              </div>
            </div>
            <a className="w-auto h-auto">
              <button
                onClick={handleButtonClick}
                className="hover:outline hover:outline-3 hover:outline-[#BABABA] hover:bg-[#DFE6F0] text-xl w-full mt-4 h-[62px] min-h-[62px] bg-[#E9E9E9] rounded-xl flex flex-col justify-center items-center"
              >
                Send
              </button>
            </a>
            <div className="mt-3 w-full h-2  flex flex-col"></div>
          </div>
          <div className="border-t-2 border-[#BABABA] flex p-7 flex-col justify-center relative items-center h-full w-[60%] left-[50%] -translate-x-1/2">
            <div className="relative w-full h-auto">
              <Image
                src="/cat-cafe.jpeg"
                width={5000}
                height={5000}
                alt="asdf"
              ></Image>
              <CommentCard />
            </div>
          </div>
          <div className="w-[60%] left-[20%] relative">
            <CatCard></CatCard>
          </div>

          {/*footer*/}
          <div className="mt-4 border-t-2 border-[#867272] relative h-auto bottom-[0%] w-[70%] left-[15%] ">
            <div className="w-full relative h-[auto] flex justify-between items-center flex-row mb-[300px] font-inter tracking-wider text-[#767F74] pt-5 ">
              <div>
                <div className="mb-3 flex text-[#867272] ">
                  {currentTime} <p className="ml-1">pst.</p>
                </div>
                <p>
                  made with <span className="text-[#DD9E9E]">love</span> by{" "}
                  <span className="text-[#5E9AC6]">andrew</span> and{" "}
                  <span className="text-[#DD9E9E]">kyla&apos;s</span> favorite
                  <span className="text-[#9AAE9B] ml-[5px]">fonts</span>
                </p>
                <p>
                  <span className=" text-[#5E9AC6]">pandy430</span>@gmail.com
                </p>
              </div>
              <a
                href="https://github.com/pandyrew/kyla-birthday"
                className="w-[40px] h-[40px]"
              >
                <Image
                  src="/github.png"
                  sizes="100vw"
                  width={0}
                  height={0}
                  alt="asdf"
                  style={{ width: "100%", height: "auto" }}
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
