import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPh27X2N-vo5ft-OgDPbaiFJByMM3-WAg",
  authDomain: "hackathon-f1b1b.firebaseapp.com",
  projectId: "hackathon-f1b1b",
  storageBucket: "hackathon-f1b1b.appspot.com",
  messagingSenderId: "668992297173",
  appId: "1:668992297173:web:4e9f0943b179b6566faa5c",
  measurementId: "G-ZW5WVW8WBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
