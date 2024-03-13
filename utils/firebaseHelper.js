// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FB_MSG_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_FB_APP_ID,
    measurementId: process.env.EXPO_PUBLIC_FB_MEASUREMENT_ID
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
