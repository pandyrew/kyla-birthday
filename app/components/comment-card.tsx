'use client'
import Image from "next/image";
import { NewCommentType } from "../types/comment";
import React, { useEffect } from "react";
import { commentsCollection } from "../lib/controller";
import Individual from "./individualCat";
import firebase, { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";

interface countType {
    count?: number;
}
export function CommentCard() {
    
    const [comments, setComments] = React.useState<NewCommentType []>([]);
    const [exportComments, setExportComments] = React.useState<NewCommentType []>([]);
    useEffect(
        () => 
        
        onSnapshot(commentsCollection, (snapshot:QuerySnapshot<DocumentData>) => {
            setComments(
                snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            }),
            
            );
            
        
        }),
        []
    );


    return(
        <div className="">
            
            {comments  && comments.length ? (
                <div className="mb-5 flex flex-col-reverse">
                    {
                        
                        comments.map((commenting, index) => (
                            <Individual key={index} comment={commenting}/>
                        ))
                    }
                </div>
            ) : (
                <div>
                    <div>
                        No comments yet
                    </div>
                </div>
            )}
        </div>
    )
}

export default CommentCard;