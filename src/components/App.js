import React from 'react'
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import SignOutButton from './SignOutButton'
import SignInForm from './SignInForm'

const App = props => {
  if (props.currentUser) return <SignOutButton />

  return (
    <div>
      <SignUpForm />
      <SignInForm />
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(App)
