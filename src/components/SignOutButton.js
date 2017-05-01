import React from 'react'
import firebase from 'firebase'

const signOut = () => { firebase.auth().signOut() }

export default () => (
  <button className="btn btn-primary" onClick={signOut}>
    Sign Out
  </button>
)
