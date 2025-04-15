import React, { useState } from 'react'
import { Input } from 'antd'
import tickIcon from '../assets/images/icons/tick-icon.svg'
import lineIcon from '../assets/images/icons/line-icon.svg'
import { useNotes } from '../context/NotesContext'

const NoteForm = () => {
  const { addNote, selectedCategoryId } = useNotes()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSave = () => {
    if (title && content && selectedCategoryId) {
      addNote({ title, content, categoryId: selectedCategoryId })
      setTitle('')
      setContent('')
    }
  }

  return (
    <div className='note-form-container'>
      <Input
        placeholder='Add a title...'
        value={title}
        onChange={e => setTitle(e.target.value)}
        className='note-title-input'
      />
      <Input.TextArea
        rows={8}
        placeholder='Write your note here...'
        value={content}
        onChange={e => setContent(e.target.value)}
        className='note-content-input'
      />
      <div className='note-form-footer'>
        <button className='custom-save-button' onClick={handleSave}>
          <span className='save-text'>Save Changes</span>
          <img src={lineIcon} alt='line' className='save-line' />
          <img src={tickIcon} alt='tick' className='save-icon' />
        </button>
      </div>
    </div>
  )
}

export default NoteForm
