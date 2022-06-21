import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHqoUyKIvpNlQdk9Sc5_DzGAaozKklYCY",
    authDomain: "parkinny-32497.firebaseapp.com",
    projectId: "parkinny-32497",
    storageBucket: "parkinny-32497.appspot.com",
    messagingSenderId: "599147872454",
    appId: "1:599147872454:web:4153978fab62e6beb197c7",
    measurementId: "G-DS4S5HXXZS"
  };
  

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);