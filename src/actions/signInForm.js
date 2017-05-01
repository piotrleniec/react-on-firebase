import firebase from 'firebase'
import { UPDATE_SIGN_IN_FORM } from '../actionTypes'

export const updateSignInForm = values => ({
  type: UPDATE_SIGN_IN_FORM,
  values
})

export const signIn = () => (_, getState) => {
  const { email, password } = getState().signInForm.values

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
}
