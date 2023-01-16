import {
  URL_AUTH_SIGN_IN,
  URL_AUTH_SIGN_UP,
  URL_BASE,
} from "../../constants/firebase"

import { Alert } from "react-native"
import { authTypes } from "../types"

const { SIGN_IN, SIGN_UP, SIGN_OUT } = authTypes

export const signUp = (email, password, firstName, lastName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      })
      if (!response.ok) {
        Alert.alert("User already exists")
        throw new Error("Something went wrong!")
      }
      const data = await response.json()
      const createUser = await fetch(`${URL_BASE}/users.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          data: {
            email: data.email,
            firstName: firstName,
            lastName: lastName,
            address: "",
          },
        }),
      })
      const responseUserData = await createUser.json()
      const userData = {
        id: responseUserData.name,
        data: {
          email: data.email,
          firstName: firstName,
          lastName: lastName,
          address: "",
        },
      }
      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
        userData: userData,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      })
      if (!response.ok) {
        Alert.alert("Email or password is incorrect")
        throw new Error("Something went wrong!")
      }
      const data = await response.json()
      const getUser = await fetch(`${URL_BASE}/users.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!getUser.ok) {
        throw new Error("User not found")
      }
      const responseUserData = await getUser.json()
      let userData = []
      Object.keys(responseUserData).forEach((key) => {
        if (responseUserData[key].data.email === data.email) {
          userData = {
            id: key,
            data: responseUserData[key].data,
          }
          return userData
        }
      })
      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
        userData: userData ? userData : [],
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const signOut = () => {
  return async (dispatch) => {
    dispatch({
      type: SIGN_OUT,
      token: null,
      userId: null,
      userData: null,
    })
  }
}
