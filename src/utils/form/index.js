const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const minPasswordLength = 6

export const validateInput = (name /*input name*/, value) => {
  let error = false
  let errorMessage = ""
  switch (name) {
    case "email":
      if (value.trim() === "") {
        error = true
        errorMessage = "Email is required"
      } else {
        if (!formatEmail.test(value)) {
          error = true
          errorMessage = "Email is not valid"
        } else {
          error = false
          errorMessage = ""
        }
      }
      break
    case "password":
      if (value.trim() === "") {
        error = true
        errorMessage = "Password is required"
      } else {
        if (value.length < minPasswordLength) {
          error = true
          errorMessage = `Password must have at least ${minPasswordLength} characters`
        } else {
          error = false
          errorMessage = ""
        }
      }
      break
    case "firstName": {
      if (value.trim() === "") {
        error = true
        errorMessage = "First name is required"
      }
      break
    }
    case "lastName": {
      if (value.trim() === "") {
        error = true
        errorMessage = "Last name is required"
      }
      break
    }
    default:
      break
  }
  return { error, errorMessage }
}

export const onInputChange = (name, value, dispatch, formState) => {
  const { error, errorMessage } = validateInput(name, value)
  let isValid = true
  for (const key in formState) {
    const item = formState[key]
    if (key !== name && item.error) {
      isValid = false
      break
    }
  }
  dispatch({
    type: UPDATED_FORM,
    data: {
      name,
      value,
      error,
      errorMessage,
      touched: true,
      isValid,
    },
  })
}

export const UPDATED_FORM = "UPDATED_FORM"
