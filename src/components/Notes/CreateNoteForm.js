import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { createNote } from '../../firebase/database/notes'

const CreateNoteForm = props => (
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

export default reduxForm({
  form: 'createNoteForm',
  onSubmit: (values, dispatch) => {
    createNote(values.title, '')
    dispatch(reset('createNoteForm'))
  }
})(CreateNoteForm)
