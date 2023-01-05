import Constants from "expo-constants"
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"
const firebaseConfig = {
  apiKey: Constants.manifest.extra.firebaseApiKey,
  authDomain: Constants.manifest.extra.firebaseAuthDomain,
  databaseURL: Constants.manifest.extra.firebaseDatabaseURL,
  projectId: Constants.manifest.extra.firebaseProjectId,
  storageBucket: Constants.manifest.extra.firebaseStorageBucket,
  messagingSenderId: Constants.manifest.extra.firebaseMessagingSenderId,
  appId: Constants.manifest.extra.firebaseAppId,
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const database = getFirestore()
