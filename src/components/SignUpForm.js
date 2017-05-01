import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/signUpForm'

const SignUpForm = props => (
  <div>
    <input
      type="email"
      placeholder="email"
      value={props.email}
      onChange={props.setEmail}
    />

    <input
      type="password"
      placeholder="password"
      value={props.password}
      onChange={props.setPassword}
    />

    <button>Sign Up</button>
  </div>
)

const mapStateToProps = state => {
  const { email = '', password = '' } = state.signUpForm.values

  return { email, password }
}

const mapDispatchToProps = dispatch => ({
  setEmail: ({ target }) => { dispatch(updateSignUpForm({ email: target.value })) },
  setPassword: ({ target }) => { dispatch(updateSignUpForm({ password: target.value })) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
