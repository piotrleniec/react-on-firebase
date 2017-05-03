import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { destroyNote } from '../../firebase/database/notes'

let Note = props => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">
        {props.note.title}
        <span
          className="pull-right"
          onClick={() => { destroyNote(props.note.id) }}
        >
          &times;
        </span>
      </h3>
    </div>
    <div className="panel-body">
      <form onSubmit={props.handleSubmit}>
        <Field name="text" component="textarea" className="form-control" />
      </form>
    </div>
  </div>
)

Note = reduxForm()(Note)

const mapStateToProps = (state, ownProps) => {
  const note = state.notes.find(note => note.id === ownProps.noteId)

  return {
    form: `updateNoteForm[${ownProps.noteId}]`,
    initialValues: {
      id: note.id,
      text: note.text
    },
    note
  }
}

export default connect(mapStateToProps)(Note)
