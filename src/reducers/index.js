import { combineReducers } from 'redux'
import signUpForm from './signUpForm'
import currentUser from './currentUser'
import signInForm from './signInForm'

export default combineReducers({
  signUpForm,
  currentUser,
  signInForm
})
