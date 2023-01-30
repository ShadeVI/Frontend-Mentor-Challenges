import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './styles/FilterElement.css'

const FilterElement = ({ text, handleClickRemove }) => {
  return (
    <div className='filter--container'>
      <span className='filter--text'>{text}</span>
      <button className='filter--btn-remove' onClick={() => handleClickRemove(text)}><AiOutlineClose /></button>
    </div>
  )
}

export default FilterElement
