import { combineReducers } from 'redux'
import signUpForm from './signUpForm'
import currentUser from './currentUser'
import signInForm from './signInForm'
import notes from './notes'
import createNoteForm from './createNoteForm'

export default combineReducers({
  signUpForm,
  currentUser,
  signInForm,
  notes,
  createNoteForm
})
