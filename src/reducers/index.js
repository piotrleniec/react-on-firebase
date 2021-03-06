import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import signUpForm from './signUpForm'
import currentUser from './currentUser'
import signInForm from './signInForm'
import notes from './notes'

export default combineReducers({
  form: reduxFormReducer,
  signUpForm,
  currentUser,
  signInForm,
  notes
})
