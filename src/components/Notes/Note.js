import React from 'react'

const Note = props => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title">
        {props.note.title}
      </h3>
    </div>
    <div className="panel-body">
      {props.note.text}
    </div>
  </div>
)

export default Note
