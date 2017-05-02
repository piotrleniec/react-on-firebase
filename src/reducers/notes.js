import { SET_NOTES } from '../actionTypes'

export default (state = [], action) => {
  switch (action.type) {
  case SET_NOTES:
    return action.notes
  default:
    return state
  }
}
