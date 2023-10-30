import './App.css'
import UpcomingAppts from './components/UpcomingAppts.jsx/UpcomingAppts'

function App({ initialData}) {
  return (
      <UpcomingAppts initialApptData={initialData}/>
  )
}

export default App
