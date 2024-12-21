import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export const commentsCollection = collection(db, 'comments');

export const addComment = async (commentData: {
  name: string;
  content: string;
  cat: number;
  counter: number;
}) => {
  try {
    const docRef = await addDoc(commentsCollection, {
      ...commentData,
      timestamp: serverTimestamp(),
    });
    return docRef;
  } catch (error) {
    console.error("Error adding comment: ", error);
    throw error;
  }
};
