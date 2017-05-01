import {
  UPDATE_SIGN_IN_FORM,
  SET_SIGN_IN_FORM_ERROR_MESSAGE
} from '../actionTypes'

const initialState = {
  values: {
    email: '',
    password: ''
  },
  errorMessage: null
}

export default (state = initialState, action) => {
  switch(action.type) {
  case UPDATE_SIGN_IN_FORM:
    return { ...state, values: { ...state.values, ...action.values } }
  case SET_SIGN_IN_FORM_ERROR_MESSAGE:
    return { ...state, errorMessage: action.errorMessage }
  default:
    return state
  }
}
