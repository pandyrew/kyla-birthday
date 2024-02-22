'use client'
import Image from "next/image";
import { NewCommentType } from "../types/comment";
import React, { useEffect } from "react";
import { commentsCollection } from "../lib/controller";
import Individual from "./individualCommentCard";
import firebase, { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";


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
                        comments.map((comment) => (
                            <Individual comment={comment} />
                            
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