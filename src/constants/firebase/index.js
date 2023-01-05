import Constants from "expo-constants"
export const URL_BASE =
  "https://reactnative-casatomada-default-rtdb.firebaseio.com"
export const URL_AUTH_SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${Constants.manifest.extra.firebaseApiKey}`
export const URL_AUTH_SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${Constants.manifest.extra.firebaseApiKey}`
