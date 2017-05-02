import React from 'react'
import { createNote } from '../../firebase/database/notes'

const Notes = () => (
  <div>
    <button onClick={() => { createNote('a', 'b') }}>Add Note</button>
  </div>
)

export default Notes
