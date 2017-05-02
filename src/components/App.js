import React from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import SignOutButton from './SignOutButton'
import SignInForm from './SignInForm'
import Notes from './Notes'

const Anonymous = () => (
  <div className="row">
    <div className="col-xs-offset-4 col-xs-4">
      <SignUpForm />
      <SignInForm />
    </div>
  </div>
)

const Authenticated = props => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        Signed as {props.currentUser.email}
        <div className="pull-right">
          <SignOutButton />
        </div>
      </div>
    </div>

    <Notes />
  </div>
)

const App = props => (
  props.currentUser ?
    <Authenticated currentUser={props.currentUser} /> :
    <Anonymous />
)

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(App)
