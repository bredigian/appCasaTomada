import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../../constants/firebase"

import { authTypes } from "../types"

const { SIGN_IN, SIGN_UP } = authTypes

export const signUp = (email, password) => {
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
        throw new Error("Something went wrong!")
      }
      const data = await response.json()
      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
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
        throw new Error("Something went wrong!")
      }
      const data = await response.json()
      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
