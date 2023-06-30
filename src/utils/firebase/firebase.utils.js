// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_n1tNWhYEKQBhaFDdMGom6xTHn9xatJk",
  authDomain: "crown-clothing-7b93e.firebaseapp.com",
  projectId: "crown-clothing-7b93e",
  storageBucket: "crown-clothing-7b93e.appspot.com",
  messagingSenderId: "112473189125",
  appId: "1:112473189125:web:756bcb3c2ae6ec0275a56c",
};

// Initialize Firebase, auth and firestore db.
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

// create google auth provider.
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// FUNCTION TO SIG IN USER WITH GOOGLE (POPUP)
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// FUNCTION TO CREATE AUTH USER WITH EMAIL AND PASSWORD
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  const authUSer = createUserWithEmailAndPassword(auth, email, password);
  return authUSer;
};

// FUNCTION TO CREATE AND SAVE USER DOCUMENT IN FIRESTORE DB
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // If the user data does not exist, create it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    await setDoc(userDocRef, {
      Name: displayName,
      Email: email,
      "Date Registered": createdAt,
      ...additionalInfo,
    });
  }

  // else return the document reference.
  return userDocRef;
};

// FUNCTION TO SIGN IN USER WITH EMAIL AND PASSWORD
export const signInAuthUserWithEmailAndPassword = (email, password) => {
  if (!email || !password) {
    return;
  }
  return signInWithEmailAndPassword(auth, email, password);
};

// FUNTION TO SIGN OUT USER
export const signOutAuthUser = async () => {
  await signOut(auth);
}
