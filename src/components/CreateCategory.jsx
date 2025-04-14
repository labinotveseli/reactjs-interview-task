import React, { useState } from 'react'
import { Input } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { useNotes } from '../context/NotesContext'
import plusIcon from '../assets/images/icons/plus-icon.svg'
import lineIcon from '../assets/images/icons/line-icon.svg'

const CreateCategory = () => {
  const [isCreating, setIsCreating] = useState(false)
  const [categoryName, setCategoryName] = useState('')
  const { addCategory } = useNotes()

  const handleCreateCategory = () => {
    if (categoryName.trim()) {
      addCategory(categoryName)
      resetForm()
    }
  }

  const resetForm = () => {
    setCategoryName('')
    setIsCreating(false)
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleCreateCategory()
    } else if (e.key === 'Escape') {
      resetForm()
    }
  }

  return (
    <div className='create-category-container'>
      {isCreating ? (
        <div className='category-create-box'>
          <Input
            placeholder='Add a title...'
            value={categoryName}
            onChange={e => setCategoryName(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            className='category-input'
            data-testid='category-input'
          />
          <button
            className='confirm-button'
            onClick={handleCreateCategory}
            data-testid='confirm-category-button'
          >
            <CheckOutlined />
          </button>
          <button
            className='cancel-button'
            onClick={resetForm}
            data-testid='cancel-category-button'
          >
            <CloseOutlined />
          </button>
        </div>
      ) : (
        <div
          className='custom-create-category-button'
          onClick={() => setIsCreating(true)}
          data-testid='create-category-button'
        >
          <span className='create-category-text'>Create Category</span>
          <div className='create-category-icon'>
            <img src={lineIcon} alt='divider' className='line-icon' />
            <img src={plusIcon} alt='plus' className='plus-icon' />
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateCategory
