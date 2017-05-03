import React from 'react'
import { connect } from 'react-redux'
import { destroyNote } from '../../firebase/database/notes'

const Note = props => (
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
      {props.note.text}
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  note: state.notes.find(note => note.id === ownProps.noteId)
})

export default connect(mapStateToProps)(Note)
