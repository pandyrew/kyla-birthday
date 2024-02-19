'use client'
import Image from "next/image";
import { NewCommentType } from "../types/comment";
import React, { useEffect } from "react";
import { commentsCollection } from "../lib/controller";
import firebase, { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";


interface IProps {
    comment: NewCommentType;
}
    


export default function Individual({comment}: IProps) {
    
    return(
        <div className="border-b-2 border-[#BABABA] pb-3 pt-5 mt-2 h-auto w-full">
            <div className="text-xl mb-10 gap-3 flex flex-row">
                <div className="mt-2">
                    <Image
                    src="/kyla-photos/cat-g.jpeg"
                    width={70}
                    height={70}
                    alt="asdf"
                    />
                </div>
                <div className="min-h-[120px] flex flex-col justify-start items-start h-auto w-full break-words">
                    <div className="min-h-[40px] font-ultrabold flex flex-row mb-2 items-center">
                        <div>
                            {comment.name}
                        </div>
                        <div className="ml-3 font-bold text-base tracking-tighter text-[#767F74]">
                            1 year ago
                        </div>
                    </div>
                    <div className="min-h-[40px] font-bold text-left">
                        {comment.content}
                    </div>               
                </div>
            </div>
        </div>
    )
}