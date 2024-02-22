'use client'
import Image from "next/image";
import { NewCommentType } from "../types/comment";
import React, { useEffect } from "react";
import { commentsCollection } from "../lib/controller";
import firebase, { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";


interface IProps {
    comment: NewCommentType;
}

function Cat(number: any, counter: any) {
        if (number === 1) {
          return (
            <Image 
                src="/cat-cafe-cats/black-cat.png"
                sizes='100vw'
                width={0}
                height={0}        
                alt='asdf'      
                style={{ width: "100%", height: "auto" }}                  
            ></Image>
          );
        } else if (number === 2){
          return (
            <Image 
                src="/cat-cafe-cats/blue-cat.png"
                sizes='100vw'
                width={0}
                height={0}        
                alt='asdf'      
                style={{ width: "100%", height: "auto" }}                  
            ></Image>
          );
        } else if (number === 3){
            return (
            <Image 
                src="/cat-cafe-cats/green-cat.png"
                sizes='100vw'
                width={0}
                height={0}        
                alt='asdf'      
                style={{ width: "100%", height: "auto" }}                  
            ></Image>            );
        } else if (number === 0){
            return (
            <Image 
                src="/cat-cafe-cats/white-cat.png"
                sizes='100vw'
                width={0}
                height={0}        
                alt='asdf'      
                style={{ width: "100%", height: "auto" }}                  
            ></Image>            )
        } else if (number === 4){
            return (
            <Image 
                src="/cat-cafe-cats/yellow-cat.png"
                sizes='100vw'
                width={0}
                height={0}        
                alt='asdf'      
                style={{ width: "100%", height: "auto" }}                  
            ></Image>            )
        }        
        
    }
    


export default function IndividualComment({comment}: IProps) {
    console.log(comment.counter)
    if (comment.name && comment.content) {
    return(
        <div className="border-t-2 border-[#BABABA] pb-3 pt-10 mb-2 h-auto w-full font-inter">
            <div className="text-xl mb-10 gap-3 flex flex-row">
                <div className="mt-2">
                    {Cat(comment.cat, comment.counter)}
                </div>
                <div className="min-h-[120px] text-[#494F48] flex flex-col justify-start items-start h-auto w-full break-words">
                    <div className="min-h-[40px] font-ultrabold flex flex-row mb-2 items-center font-ander">
                        <div>
                            {comment.name}
                        </div>
                        <div className="ml-3 font-bold text-base tracking-normal text-[#767F74]">
                            1 year ago
                        </div>
                    </div>
                    <div className="min-h-[40px] font-ander font-bold text-left text-[#647062]">
                        {comment.content}
                    </div>               
                </div>
            </div>
        </div>
    )
    }
}