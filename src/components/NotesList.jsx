import React from 'react'
import { List, Typography, Empty } from 'antd'
import { useNotes } from '../context/NotesContext'

const { Text, Title } = Typography

const NotesList = () => {
  const { filteredNotes, selectedNoteId, selectNote } = useNotes()

  if (!filteredNotes || filteredNotes.length === 0) {
    return (
      <div className='empty-state'>
        <Empty description='No notes found' />
      </div>
    )
  }

  return (
    <List
      className='notes-list'
      dataSource={filteredNotes}
      renderItem={note => (
        <List.Item
          className={`note-item ${selectedNoteId === note.id ? 'active' : ''}`}
          onClick={() => selectNote(note.id)}
          data-testid={`note-item-${note.id}`}
        >
          <div className=''>
            <div className='note-content'>
              <Title level={5} className='note-title'>
                {note.title}
              </Title>
              <Text className='note-preview'>{note.content}</Text>
            </div>
          </div>
        </List.Item>
      )}
    />
  )
}

export default NotesList
