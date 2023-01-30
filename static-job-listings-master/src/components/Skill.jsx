import React from 'react'
import { useJobsContext } from '../context'
import './styles/Skill.css'

const Skill = ({ text }) => {
  const { dispatchJobs } = useJobsContext()

  const handleClick = ({ text }) => {
    dispatchJobs({ type: 'ADD_FILTER', payload: { filter: text } })
  }
  return (
    <button className='skill' onClick={() => handleClick({ text })}>{text}</button>
  )
}

export default Skill
