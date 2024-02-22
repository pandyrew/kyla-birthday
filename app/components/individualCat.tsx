'use client'
import Image from "next/image";
import { NewCommentType } from "../types/comment";
import React, { useEffect, useCallback, useMemo } from "react";
import { commentsCollection } from "../lib/controller";
import firebase, { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";


interface IProps {
    comment: NewCommentType;
}


    


export default function Individual({comment}: IProps) {

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



    const topValue = useMemo(() => setTopValue(comment.counter), ['10%'], );
    const leftValue = useMemo(() => setLeftValue(comment.counter), ['10%']);
    
    function setTopValue(count?: number) {
        if (count === 1) {
        const valueOfTop = '24%'
        return valueOfTop;}
        else if (count === 2) {
        const valueOfTop = '15%'
        return valueOfTop;}
        else if (count === 3) {
        const valueOfTop = '24%'
        return valueOfTop;}
        else if (count === 4) {
        const valueOfTop = '16%'
        return valueOfTop;}
        else if (count === 5) {
        const valueOfTop = '32%'
        return valueOfTop;}
        else if (count === 6) {
        const valueOfTop = '29%'
        return valueOfTop;}
        else if (count === 7) {
        const valueOfTop = '28.5%'
        return valueOfTop;}
        else if (count === 8) {
        const valueOfTop = '26.5%'
        return valueOfTop;}
        else if (count === 9) {
        const valueOfTop = '29%'
        return valueOfTop;}
        else if (count === 10) {
        const valueOfTop = '29%'
        return valueOfTop;}
        else if (count === 11) {
        const valueOfTop = '27%'
        return valueOfTop;}
        else if (count === 12) {
        const valueOfTop = '50%'
        return valueOfTop;}
        else if (count === 13) {
        const valueOfTop = '22%'
        return valueOfTop;}
        else if (count === 14) {
        const valueOfTop = '53%'
        return valueOfTop;}
        else if (count === 15) {
        const valueOfTop = '37%'
        return valueOfTop;}
        else if (count === 16) {
        const valueOfTop = '33%'
        return valueOfTop;}
        else if (count === 17) {
        const valueOfTop = '7%'
        return valueOfTop;}
        return '10%'
    }
    function setLeftValue(count?: number) {
        if (count === 1) {
        const valueOfTop = '27%'
        return valueOfTop;}
        if (count === 2) {
        const valueOfTop = '55%'
        return valueOfTop;}
        if (count === 3) {
        const valueOfTop = '48%'
        return valueOfTop;}
        if (count === 4) {
        const valueOfTop = '49%'
        return valueOfTop;}
        if (count === 5) {
        const valueOfTop = '47%'
        return valueOfTop;}
        if (count === 6) {
        const valueOfTop = '33.5%'
        return valueOfTop;}
        if (count === 7) {
        const valueOfTop = '53.5%'
        return valueOfTop;}
        if (count === 8) {
        const valueOfTop = '11.5%'
        return valueOfTop;}
        if (count === 9) {
        const valueOfTop = '4%'
        return valueOfTop;}
        else if (count === 10) {
        const valueOfTop = '90%'
        return valueOfTop;}
        else if (count === 11) {
        const valueOfTop = '81%'
        return valueOfTop;}
        else if (count === 12) {
        const valueOfTop = '73.5%'
        return valueOfTop;}
        else if (count === 13) {
        const valueOfTop = '66%'
        return valueOfTop;}
        else if (count === 14) {
        const valueOfTop = '83%'
        return valueOfTop;}
        else if (count === 15) {
        const valueOfTop = '83%'
        return valueOfTop;}
        else if (count === 16) {
        const valueOfTop = '73%'
        return valueOfTop;}
        else if (count === 17) {
        const valueOfTop = '63%'
        return valueOfTop;}
        return '10%'
    }

    if (comment.name && comment.content) {
    return(
        <div className="drop-shadow-xl" style={{position: 'absolute', width: '7%', height: '7%', top: topValue, left: leftValue}}>
            {Cat(comment.cat, comment.counter)}
        </div>
    )
    }
}