import firebase from 'firebase'
import { SET_CURRENT_USER } from '../actionTypes'

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
})

export const synchronizeCurrentUser = () => dispatch => {
  const { currentUser } = firebase.auth()

  if (!currentUser) {
    dispatch(setCurrentUser(null))
    return
  }

  dispatch(setCurrentUser({
    id: currentUser.uid,
    email: currentUser.email,
    photoURL: currentUser.photoURL
  }))
}

export const updateProfilePicture = image => (dispatch, getState) => {
  const userId = getState().currentUser.id
  const splitName = image.name.split('.')
  const imageExtension = splitName[splitName.length - 1]

  firebase.storage()
          .ref('profile-pictures')
          .child(`${userId}.${imageExtension}`)
          .put(image)
          .then(imageSnapshot => {
            firebase.auth()
                    .currentUser
                    .updateProfile({ photoURL: imageSnapshot.downloadURL })
                    .then(() => { dispatch(synchronizeCurrentUser()) })
          })
}
