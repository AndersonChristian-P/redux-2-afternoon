import axios from "axios"

const REQUEST_USER_DATA = "REQUEST_USER_DATA"

const initialState = {
  email: null,
  firstName: null,
  lastName: null
}

export function requestUserData() {
  let data = axios.get("/auth/user-data").then(res => res.data)
  return {
    type: REQUEST_USER_DATA,
    payload: data
  }
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_USER_DATA}_FULFILLED`:
      const { email, firstName, lastName } = action.payload.user
      return { ...state, email, firstName, lastName }
    default:
      return state
  }
}

