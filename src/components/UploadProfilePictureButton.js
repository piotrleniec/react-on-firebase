import React from 'react'
import { connect } from 'react-redux'
import { updateProfilePicture } from '../actions/currentUser'

const UploadProfilePictureButton = ({ updateProfilePicture }) => (
  <input type="file" onChange={updateProfilePicture} />
)

const mapDispatchToProps = dispatch => ({
  updateProfilePicture: ({ target }) => {
    dispatch(updateProfilePicture(target.files[0]))
  }
})

export default connect(null, mapDispatchToProps)(UploadProfilePictureButton)
