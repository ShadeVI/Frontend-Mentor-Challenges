import { Header } from './Header'
import { JobsProvider } from '../context'
import ListJobs from './ListJobs'
import Filter from './Filter'

const App = () => {
  return (
    <>
      <Header />
      <JobsProvider>
        <div className='container'>
          <Filter />
          <ListJobs />
        </div>
      </JobsProvider>
    </>
  )
}

export default App
