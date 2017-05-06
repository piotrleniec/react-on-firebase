import React from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import SignOutButton from './SignOutButton'
import SignInForm from './SignInForm'
import Notes from './Notes'
import UploadProfilePictureButton from './UploadProfilePictureButton'

const Anonymous = () => (
  <div className="row">
    <div className="col-xs-offset-4 col-xs-4">
      <SignUpForm />
      <SignInForm />
    </div>
  </div>
)

const Authenticated = ({ currentUser: { email, photoURL } }) => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        {photoURL && <img src={photoURL} />} {email}
        <div className="pull-right">
          <SignOutButton />
        </div>
      </div>
    </div>

    <Notes />

    <UploadProfilePictureButton />
  </div>
)

const App = ({ currentUser }) => (
  currentUser ? <Authenticated currentUser={currentUser} /> : <Anonymous />
)

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(App)
