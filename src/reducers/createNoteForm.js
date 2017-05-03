import { UPDATE_CREATE_NOTE_FORM } from '../actionTypes'

const initialState = {
  values: { title: '' }
}

export default (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_CREATE_NOTE_FORM:
    return { ...state, values: { ...state.values, ...action.values } }
  default:
    return state
  }
}
