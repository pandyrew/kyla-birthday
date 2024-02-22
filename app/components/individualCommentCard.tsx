'use client'
import Image from "next/image";
import { NewCommentType } from "../types/comment";
import React, { useEffect } from "react";
import { commentsCollection } from "../lib/controller";
import firebase, { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";


interface IProps {
    comment: NewCommentType;
}

function Cat(number: any) {
        if (number === 1) {
          return (
            <Image src="/cat-icon-b.png" width={70} height={70} alt="logo" />
          );
        } else if (number === 2){
          return (
            <Image src="/cat-icon-y.png" width={70} height={70} alt="logo" />
          );
        } else if (number === 3){
            return (
              <Image src="/cat-icon-g.jpeg" width={70} height={70} alt="logo" />
            );
        } else if (number === 0){
            return (
                <Image src="/cat-icon-r.png" width={70} height={70} alt="logo" />
            )
        }

    }
    


export default function Individual({comment}: IProps) {
    if (comment.name && comment.content) {
    return(
        <div className="border-t-2 border-[#BABABA] pb-3 pt-10 mb-2 h-auto w-full font-inter">
            <div className="text-xl mb-10 gap-3 flex flex-row">
                <div className="mt-2">
                    {Cat(comment.cat)}
                </div>
                <div className="min-h-[120px] flex flex-col justify-start items-start h-auto w-full break-words">
                    <div className="min-h-[40px] font-ultrabold flex flex-row mb-2 items-center">
                        <div>
                            {comment.name}
                        </div>
                        <div className="ml-3 font-bold text-base tracking-normal text-[#767F74]">
                            1 year ago
                        </div>
                    </div>
                    <div className="min-h-[40px] font-bold text-left text-[#647062]">
                        {comment.content}
                    </div>               
                </div>
            </div>
        </div>
    )
    }
}