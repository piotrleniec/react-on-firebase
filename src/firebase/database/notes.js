import firebase from 'firebase'

export const createNote = (title, text) => {
  firebase.database().ref('notes').push().set({
    title, text
  })
}
