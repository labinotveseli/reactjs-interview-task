import React from 'react'
import { List, Typography } from 'antd'
import { FolderFilled } from '@ant-design/icons'
import rightArrow from '../assets/images/icons/right-arrow.svg'
import downArrow from '../assets/images/icons/down-arrow.svg'
import { useNotes } from '../context/NotesContext'

const { Text } = Typography

const CategoryList = () => {
  const { categories, selectedCategoryId, selectCategory } = useNotes()

  return (
    <List
      className='category-list'
      dataSource={categories}
      renderItem={category => {
        const isActive = selectedCategoryId === category.id
        return (
          <List.Item
            className={`category-item ${isActive ? 'active' : ''}`}
            onClick={() => selectCategory(category.id)}
            data-testid={`category-item-${category.id}`}
          >
            <div className='category-icon'>
              <FolderFilled />
            </div>
            <div className='category-name'>
              {category.name} ({category.count})
            </div>
            <div className='category-arrow'>
              <img
                src={isActive ? rightArrow : downArrow}
                alt='arrow'
                style={{ width: 10, height: 10 }}
              />
            </div>
          </List.Item>
        )
      }}
    />
  )
}

export default CategoryList
