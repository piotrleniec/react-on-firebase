import React from 'react'
import { connect } from 'react-redux'
import {
  updateCreateNoteForm,
  submitCreateNoteForm
} from '../../actions/createNoteForm'

const CreateNoteForm = props => (
  <div className="input-group">
    <span className="input-group-btn">
      <button
        className="btn btn-primary"
        onClick={props.submitCreateNoteForm}
      >
        Create
      </button>
    </span>

    <input
      className="form-control"
      value={props.title}
      onChange={props.setTitle}
    />
  </div>
)

const mapStateToProps = state => {
  const { title } = state.createNoteForm.values

  return { title }
}

const mapDispatchToProps = dispatch => ({
  setTitle: ({ target }) => { dispatch(updateCreateNoteForm({ title: target.value })) },
  submitCreateNoteForm: () => { dispatch(submitCreateNoteForm()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNoteForm)
