import React from 'react'
import { useJobsContext } from '../context'
import './styles/Filter.css'

const Filter = () => {
  const { filters, dispatchJobs } = useJobsContext()

  const handleClickRemove = (filter) => {
    dispatchJobs({ type: 'REMOVE_FILTER', payload: { filter } })
  }

  return (
    <section className='filter'>
      <div>
        {filters.map(el => (
          <button onClick={() => handleClickRemove(el)} key={el}>{el}</button>)
        )}
      </div>
      <button>clear</button>
    </section>
  )
}

export default Filter
