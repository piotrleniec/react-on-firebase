import { combineReducers } from 'redux'
import signUpForm from './signUpForm'
import currentUser from './currentUser'

export default combineReducers({
  signUpForm,
  currentUser
})
