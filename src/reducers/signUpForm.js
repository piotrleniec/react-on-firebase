import { UPDATE_SIGN_UP_FORM } from '../actionTypes'

const initialState = {
  values: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
  case UPDATE_SIGN_UP_FORM:
    return { ...state, values: { ...state.values, ...action.values } }
  default:
    return state
  }
}
