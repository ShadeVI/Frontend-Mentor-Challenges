import React from 'react'
import { useJobsContext } from '../context'
import './styles/Filter.css'

import FilterElement from './FilterElement'

const Filter = () => {
  const { filters, dispatchJobs } = useJobsContext()

  const handleClickRemove = (filter) => {
    dispatchJobs({ type: 'REMOVE_FILTER', payload: { filter } })
  }

  const handleClickClearAll = () => {
    dispatchJobs({ type: 'CLEAR_FILTER' })
  }

  return (
    <section className='filter'>
      <div className='filters--elementsContainer'>
        {filters.map(el => (
          <FilterElement key={el} text={el} handleClickRemove={handleClickRemove} />)
        )}
      </div>
      <button className='filter--clearAll' onClick={handleClickClearAll}>Clear</button>
    </section>
  )
}

export default Filter
