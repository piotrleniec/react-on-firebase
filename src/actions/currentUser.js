import firebase from 'firebase'
import { SET_CURRENT_USER } from '../actionTypes'

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
})

export const updateProfilePicture = image => (_, getState) => {
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
          })
}
