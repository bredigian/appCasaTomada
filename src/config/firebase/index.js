import { API_KEY } from "../../constants/firebase"
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "reactnative-casatomada.firebaseapp.com",
  databaseURL: "https://reactnative-casatomada-default-rtdb.firebaseio.com",
  projectId: "reactnative-casatomada",
  storageBucket: "reactnative-casatomada.appspot.com",
  messagingSenderId: "402987132134",
  appId: "1:402987132134:web:0e3e8ae653e0d382cbc727",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const database = getFirestore()
