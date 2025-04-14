import React, { useState, useEffect } from 'react'
import { Input, Button, Empty } from 'antd'
import tickIcon from '../assets/images/icons/tick-icon.svg'
import deleteIcon from '../assets/images/icons/delete-icon.svg'
import lineIcon from '../assets/images/icons/line-icon.svg'
import { useNotes } from '../context/NotesContext'

const { TextArea } = Input

const NoteView = () => {
  const { selectedNote, updateNote, deleteNote } = useNotes()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isEdited, setIsEdited] = useState(false)

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title)
      setContent(selectedNote.content)
      setIsEdited(false)
    } else {
      setTitle('')
      setContent('')
    }
  }, [selectedNote])

  const handleTitleChange = e => {
    setTitle(e.target.value)
    setIsEdited(true)
  }

  const handleContentChange = e => {
    setContent(e.target.value)
    setIsEdited(true)
  }

  const handleSave = () => {
    if (
      selectedNote &&
      (title !== selectedNote.title || content !== selectedNote.content)
    ) {
      updateNote({
        ...selectedNote,
        title: title,
        content: content
      })
      setIsEdited(false)
    }
  }

  const handleDelete = () => {
    if (selectedNote) {
      deleteNote(selectedNote.id)
    }
  }

  if (!selectedNote) {
    return (
      <div className='empty-state'>
        <Empty description='Select a note to view its contents' />
      </div>
    )
  }

  return (
    <div className='note-editor'>
      <div className='note-editor-header'>
        <Input
          placeholder='Title'
          value={title}
          onChange={handleTitleChange}
          className='note-title-input'
          data-testid='note-title-input'
        />
      </div>

      <div className='note-editor-body'>
        <TextArea
          placeholder='Write your note here...'
          value={content}
          onChange={handleContentChange}
          autoSize={{ minRows: 10, maxRows: 20 }}
          className='note-content-input'
          data-testid='note-content-input'
        />
      </div>

      <div className='note-editor-footer custom-footer-buttons'>
        <button className='delete-button'>
          <span className='save-text'>Delete Note</span>
          <img src={lineIcon} alt='line' className='save-line delete-line' />
          <img src={deleteIcon} alt='delete' className='save-icon' />
        </button>

        <button
          className='custom-save-button'
          onClick={handleSave}
          disabled={!isEdited}
          style={{
            opacity: isEdited ? 1 : 0.5,
            cursor: isEdited ? 'pointer' : 'not-allowed'
          }}
        >
          <span className='save-text'>Save Changes</span>
          <img src={lineIcon} alt='line' className='save-line' />
          <img src={tickIcon} alt='tick' className='save-icon' />
        </button>
      </div>
    </div>
  )
}

export default NoteView
