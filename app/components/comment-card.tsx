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
        howManyComments(comments),
        []
    );


    return(
        <div>
            
            {comments  && comments.length ? (
                <div className="mb-5">
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

export function howManyComments(comments: NewCommentType[]) {
    return comments;
    }

/*<Individual
            name="Andrew"
            content="Happy Birthday Kyla! I hope you have a great day!"
            />
            <Individual
            name="Andrew"
            content="Happy Birthday Kyla! I hope you have a great day!"
            />
            <Individual
            name="Andrew"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />*/