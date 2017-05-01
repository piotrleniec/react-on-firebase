import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm, signUp } from '../actions/signUpForm'

const SignUpForm = props => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">
        Sign Up
      </h3>
    </div>
    <div className="panel-body">
      <div className="form-group">
        <input
          type="email"
          placeholder="email"
          className="form-control"
          value={props.email}
          onChange={props.setEmail}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="password"
          className="form-control"
          value={props.password}
          onChange={props.setPassword}
        />
      </div>

      <button className="btn btn-primary pull-left" onClick={props.signUp}>
        Sign Up
      </button>
    </div>
  </div>
)

const mapStateToProps = state => {
  const { email = '', password = '' } = state.signUpForm.values

  return { email, password }
}

const mapDispatchToProps = dispatch => ({
  setEmail: ({ target }) => { dispatch(updateSignUpForm({ email: target.value })) },
  setPassword: ({ target }) => { dispatch(updateSignUpForm({ password: target.value })) },
  signUp: () => { dispatch(signUp()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
