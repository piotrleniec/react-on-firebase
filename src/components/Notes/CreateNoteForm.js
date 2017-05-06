import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { createNote } from '../../firebase/database/notes'

let CreateNoteForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="input-group">
      <span className="input-group-btn">
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </span>

      <Field name="title" component="input" className="form-control" />
    </div>
  </form>
)

CreateNoteForm = reduxForm({
  form: 'createNoteForm',
  onSubmit: (values, dispatch) => {
    createNote(values.userId, values.title, '')
    dispatch(reset('createNoteForm'))
  }
})(CreateNoteForm)

const mapStateToProps = state => ({
  initialValues: {
    userId: state.currentUser.id
  }
})

export default connect(mapStateToProps)(CreateNoteForm)
