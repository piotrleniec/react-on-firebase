import firebase from 'firebase'
import {
  UPDATE_SIGN_IN_FORM,
  SET_SIGN_IN_FORM_ERROR_MESSAGE
} from '../actionTypes'

export const updateSignInForm = values => ({
  type: UPDATE_SIGN_IN_FORM,
  values
})

const setSignInFormError = errorMessage => ({
  type: SET_SIGN_IN_FORM_ERROR_MESSAGE,
  errorMessage
})

export const signIn = () => (dispatch, getState) => {
  const { email, password } = getState().signInForm.values

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(updateSignInForm({ email: '', password: '' }))
      dispatch(setSignInFormError(null))
    })
    .catch(error => {
      dispatch(updateSignInForm({ password: '' }))
      dispatch(setSignInFormError(error.message))
    })
}
