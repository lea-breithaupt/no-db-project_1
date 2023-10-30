import UpcomingApptsHeader from "./UpcomingApptsHeader"
import BookNewApptBtn from "../BookNewApptBtn"
import UpcomingApptsRow from "./UpcomingApptsRow"
import DateCell from "./DateCell"
import TimeCell from "./TimeCell"
import MainServiceCell from "./MainServiceCell"
import AdditionalServiceCell from "./AdditionalServiceCell"
import DescriptionCell from "./DescriptionCell"
import EditApptBtns from "./EditApptBtns"
import NoUpcomingAppts from "./NoUpcomingAppts"
import { useState } from 'react'
import axios from "axios"
import ComplimentaryMessage from "../ComplimentaryMessage"
import Header from "../Header"

let globalId = 4

const UpcomingAppts = ({ initialApptData, initialEditing }) => {
  const [currentData, setCurrentData] = useState(initialApptData)

  const rows = currentData.map((apptItem) => {
    const { id, date, time, mainService, additionalService, description, editing } = apptItem
    
    return (
      <UpcomingApptsRow 
        key={id}
        id={id}
        initialApptData={{ date, time, mainService, additionalService, description }}
        initialEditing={editing}
        deleteFunction={() => deleteAppt(id)}
      />
    )
  })

  const addAppt = async () => {
    const response= await axios.post('/addAppointment', { 
      date:'Select a Date', 
      time: 'Select a Time', 
      mainService: 'Select a service', 
      additionalService: 'Select additional services', 
      description: 'add a description to let our stylists know your vision'
    })

    setCurrentData([...currentData, response.data])
  }

  const deleteAppt = async (apptId) => {
    const response = await axios.delete(`/deleteAppointment/${apptId}`)

    if(!response.data.error) {
      const filteredList = currentData.filter((apptItem) => apptItem.id !== apptId)

      setCurrentData(filteredList)
    } 
  }


  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <h2>Your Upcoming Appointments:</h2>
        {currentData.length === 0 ? (
          <NoUpcomingAppts />
        ) : (
        <table>
          <thead>
            <UpcomingApptsHeader editing={initialEditing}/>
          </thead>
        
          <tbody>
            {rows}
          </tbody>
      </table>)}
        <BookNewApptBtn bookApptClick={addAppt}/>
        <ComplimentaryMessage />
      </div>
    </div>
  )
}

export default UpcomingAppts