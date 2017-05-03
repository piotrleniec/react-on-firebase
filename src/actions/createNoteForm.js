import { UPDATE_CREATE_NOTE_FORM } from '../actionTypes'
import { createNote } from '../firebase/database/notes'

export const updateCreateNoteForm = values => ({
  type: UPDATE_CREATE_NOTE_FORM,
  values
})

export const submitCreateNoteForm = () => (dispatch, getState) => {
  createNote(getState().createNoteForm.values.title, '')
  dispatch(updateCreateNoteForm({ title: '' }))
}
