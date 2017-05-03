import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../../firebase/database/notes'
import Note from './Note'
import CreateNoteForm from './CreateNoteForm'

const Notes = props => (
  <div>
    <div className="row">
      {props.notes.map(note => (
        <div className="col-xs-4" key={note.id}>
          <Note noteId={note.id} />
        </div>
      ))}
    </div>

    <button onClick={() => { createNote('a', 'b') }}>Add Note</button>

    <div className="row">
      <div className="col-xs-offset-1 col-xs-10">
        <CreateNoteForm />
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps)(Notes)
