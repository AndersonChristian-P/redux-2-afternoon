import axios from "axios"

const initialState = {
  email: null,
  firstName: null,
  lastName: null
}

const REQUEST_USER_DATA = "REQUEST_USER_DATA"

export function requestUserData() {
  const data = axios.get("/auth/user-data")
  return {
    action: REQUEST_USER_DATA,
    payload: data
  }
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_USER_DATA}_FULFILLED`:
      const { email, firstName, lastName } = action.payload.user
      return { ...state, email: email, firstName: firstName, lastName: lastName }
    default:
      return state
  }

}

export default userReducer