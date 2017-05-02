import firebase from 'firebase'
import store from '../store'
import { setCurrentUser } from '../actions/currentUser'
import { setNotes } from '../actions/notes'

export default () => {
  firebase.auth().onAuthStateChanged(user => {
    store.dispatch(setCurrentUser(
      user ? { email: user.email } : null
    ))
  })

  firebase.database().ref('notes').on('value', notesSnapshot => {
    const notesObject = notesSnapshot.val()

    if (notesObject) {
      const notes = Object.keys(notesObject).map(noteId => ({
        id: noteId,
        ...notesObject[noteId]
      }))

      store.dispatch(setNotes(notes))
    }
  })
}
