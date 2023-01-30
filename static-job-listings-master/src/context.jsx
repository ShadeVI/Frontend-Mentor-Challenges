import { createContext, useContext, useReducer } from 'react'
import dataJobs from '../data.json'

const jobsContext = createContext()

const reducer = (state, action) => {
  const { payload: { filter } } = action

  if (action.type === 'ADD_FILTER') {
    if (!state.filterJobs.includes(filter)) {
      const newFilter = [...state.filterJobs, action.payload.filter]
      const newState = { ...state, filterJobs: newFilter }
      return newState
    }
  }

  if (action.type === 'REMOVE_FILTER') {
    const newFilters = state.filterJobs.filter(oldFilter => oldFilter !== filter)

    const newState = { ...state, filterJobs: newFilters }
    return newState
  }
  return state
}

const JobsProvider = ({ children }) => {
  const [state, dispatchJobs] = useReducer(reducer, { jobs: dataJobs, filterJobs: [] })

  return (
    <jobsContext.Provider value={{ jobs: state.jobs, filters: state.filterJobs, dispatchJobs }}>
      {children}
    </jobsContext.Provider>
  )
}

const useJobsContext = () => {
  return useContext(jobsContext)
}

export { JobsProvider, useJobsContext }
