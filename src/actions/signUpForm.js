import firebase from 'firebase'
import { UPDATE_SIGN_UP_FORM } from '../actionTypes'

export const updateSignUpForm = values => ({
  type: UPDATE_SIGN_UP_FORM,
  values
})

export const signUp = () => (dispatch, getState) => {
  const { email, password } = getState().signUpForm.values

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
}
