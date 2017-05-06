import firebase from 'firebase'

export const createNote = (userId, title, text) => {
  firebase.database().ref('notes').push().set({
    userId, title, text
  })
}

export const destroyNote = noteId => {
  firebase.database().ref(`notes/${noteId}`).remove()
}

export const updateNote = (noteId, text) => {
  firebase.database().ref(`notes/${noteId}`).update({ text })
}
