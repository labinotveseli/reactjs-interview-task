import React from 'react'
import { useNotes } from '../context/NotesContext'
import plusIcon from '../assets/images/icons/plus-icon.svg'
import lineIcon from '../assets/images/icons/line-icon.svg'

const CreateNote = () => {
  const { enterCreateNoteMode } = useNotes()

  return (
    <div className='custom-create-note-button' onClick={enterCreateNoteMode}>
      <span className='create-note-text'>Create Note</span>
      <div className='create-note-icon'>
        <img src={lineIcon} alt='line' />
        <img src={plusIcon} alt='plus' />
      </div>
    </div>
  )
}

export default CreateNote
