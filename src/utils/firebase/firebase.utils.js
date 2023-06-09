// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_n1tNWhYEKQBhaFDdMGom6xTHn9xatJk",
    authDomain: "crown-clothing-7b93e.firebaseapp.com",
    projectId: "crown-clothing-7b93e",
    storageBucket: "crown-clothing-7b93e.appspot.com",
    messagingSenderId: "112473189125",
    appId: "1:112473189125:web:756bcb3c2ae6ec0275a56c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider;
provider.setCustomParameters({
    'prompt': 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // If the user data does not exist, create it
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                'Name': displayName,
                'Email': email,
                'Date Registered': createdAt
            })
        } catch (err){
            console.log(err.message);
        }
    }

    // else return the document reference.
    return userDocRef;
}
