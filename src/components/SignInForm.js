import React from 'react'
import { connect } from 'react-redux'
import { updateSignInForm, signIn } from '../actions/signInForm'

const Alert = ({ errorMessage }) => (
  <div className="alert alert-danger">
    {errorMessage}
  </div>
)

const SignInForm = props => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">
        Sign In
      </h3>
    </div>
    <div className="panel-body">
      {props.errorMessage && <Alert errorMessage={props.errorMessage} />}

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

      <button className="btn btn-primary pull-left" onClick={props.signIn}>
        Sign In
      </button>
    </div>
  </div>
)

const mapStateToProps = state => {
  const { values: { email, password }, errorMessage } = state.signInForm

  return { email, password, errorMessage }
}

const mapDispatchToProps = dispatch => ({
  setEmail: ({ target }) => { dispatch(updateSignInForm({ email: target.value })) },
  setPassword: ({ target }) => { dispatch(updateSignInForm({ password: target.value })) },
  signIn: () => { dispatch(signIn()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
