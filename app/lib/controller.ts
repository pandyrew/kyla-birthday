import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { NewCommentType, AddCommentType } from "../types/comment";

export const firestore = getFirestore(app);

// comments collection

export const commentsCollection = collection(firestore, "comments");

//add a new comment document
export const addComment = async (commentData: AddCommentType) => {
    const newComment = await addDoc(commentsCollection, {...commentData});
    console.log('new comment was created at ${newComment.path}')

}
