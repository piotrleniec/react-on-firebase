import firebase from 'firebase'
import store from '../store'
import { synchronizeCurrentUser } from '../actions/currentUser'
import { setNotes } from '../actions/notes'

const notesHook = () => {
  firebase.database().ref('notes').on('value', notesSnapshot => {
    const notesObject = notesSnapshot.val()

    if (!notesObject) {
      store.dispatch(setNotes([]))
      return
    }

    const notes = Object.keys(notesObject).map(noteId => ({
      id: noteId,
      ...notesObject[noteId]
    }))

    store.dispatch(setNotes(notes))
  })
}

export default () => {
  firebase.auth().onAuthStateChanged(() => {
    store.dispatch(synchronizeCurrentUser())

    notesHook()
  })
}
