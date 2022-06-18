import '../styles/globals.css';
import type { AppProps } from 'next/app';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCvGtUCVqTSZcch7CEyg0u9F3Wg6qM8MOk',
  authDomain: 'baucarquitectura.firebaseapp.com',
  projectId: 'baucarquitectura',
  storageBucket: 'baucarquitectura.appspot.com',
  messagingSenderId: '939782037159',
  appId: '1:939782037159:web:880e50f2cd9f641602c582',
  measurementId: 'G-X1742179KL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
function MyApp({ Component, pageProps }: AppProps) {
  const app = initializeApp(firebaseConfig);

  return <Component {...pageProps} />;
}

export default MyApp;
