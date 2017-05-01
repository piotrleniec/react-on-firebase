import firebase from 'firebase'
import store from '../store'
import { setCurrentUser } from '../actions/currentUser'

export default () => {
  firebase.auth().onAuthStateChanged(user => {
    store.dispatch(setCurrentUser(
      user ? { email: user.email } : null
    ))
  })
}
