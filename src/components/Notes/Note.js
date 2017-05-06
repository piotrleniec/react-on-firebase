import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { destroyNote, updateNote } from '../../firebase/database/notes'

const RemoveNoteButton = ({ noteId }) => (
  <span className="pull-right" onClick={() => { destroyNote(noteId) }}>
    &times;
  </span>
)

let Note = ({ note, authorizedToUpdate, handleSubmit }) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">
        {note.title}

        {authorizedToUpdate && <RemoveNoteButton noteId={note.id} />}
      </h3>
    </div>
    <div className="panel-body">
      <form onSubmit={handleSubmit}>
        <Field
          name="text"
          component="textarea"
          className="form-control"
          readOnly={!authorizedToUpdate}
        />
      </form>
    </div>
  </div>
)

Note = reduxForm({
  asyncBlurFields: ['text'],
  asyncValidate: values => {
    if (!values.authorizedToUpdate) return Promise.resolve()

    return new Promise(resolve => {
      updateNote(values.id, values.text)
      resolve()
    })
  }
})(Note)

const mapStateToProps = (state, ownProps) => {
  const note = state.notes.find(note => note.id === ownProps.noteId)
  const authorizedToUpdate = state.currentUser.id === note.userId

  return {
    form: `updateNoteForm[${ownProps.noteId}]`,
    initialValues: {
      id: note.id,
      text: note.text,
      authorizedToUpdate
    },
    note,
    authorizedToUpdate
  }
}

export default connect(mapStateToProps)(Note)
