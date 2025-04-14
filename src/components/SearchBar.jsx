import React from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useNotes } from '../context/NotesContext'

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useNotes()

  return (
    <Input
      prefix={<SearchOutlined style={{ color: '#EAEAEA' }} />}
      placeholder='Search...'
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className='custom-search-bar'
      allowClear
    />
  )
}

export default SearchBar
