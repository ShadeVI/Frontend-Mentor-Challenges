import React from 'react'
import { useJobsContext } from '../context'
import Card from './Card'
import './styles/ListJobs.css'

const ListJobs = () => {
  const { jobs, filters } = useJobsContext()
  return (
    <section className='jobs-list'>
      {jobs.map((job) => {
        const { role, level, languages, tools } = job
        const skillsSet = [role, level, ...languages, ...tools]
        const { id } = job
        if (filters.length === 0) {
          return <Card key={id} job={job} />
        }
        if (filters.every((el) => skillsSet.includes(el))) {
          return <Card key={id} job={job} />
        }
        return null
      })}
    </section>

  )
}

export default ListJobs
