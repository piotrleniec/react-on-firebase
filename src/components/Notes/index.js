import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../../firebase/database/notes'
import Note from './Note'

const Notes = props => (
  <div>
    <div className="row">
      {props.notes.map(note => (
        <div className="col-xs-4" key={note.id}>
          <Note note={note} />
        </div>
      ))}
    </div>

    <button onClick={() => { createNote('a', 'b') }}>Add Note</button>
  </div>
)

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps)(Notes)
