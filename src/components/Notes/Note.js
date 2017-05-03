import React from 'react'
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

export default Note
