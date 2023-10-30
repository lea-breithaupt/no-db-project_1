import DateCell from "./DateCell"
import TimeCell from "./TimeCell"
import MainServiceCell from "./MainServiceCell"
import AdditionalServiceCell from "./AdditionalServiceCell"
import DescriptionCell from "./DescriptionCell"
import EditApptBtns from "./EditApptBtns"
import { useState } from 'react'
import axios from "axios"

const UpcomingApptsRow = ({ initialEditing, initialApptData, deleteFunction, id }) => {

  const [editMode, setEditMode] = useState(initialEditing)

  const [date, setDate] = useState(initialApptData.date)
  const [time, setTime] = useState(initialApptData.time)
  const [mainService, setMainService] = useState(initialApptData.mainService)
  const [additionalService, setAdditionalService] = useState(initialApptData.additionalService)
  const [description, setDescription] = useState(initialApptData.description)

  const changeNormalMode = async () => {
    let bodyObj = {
      date: date,
      time: time,
      mainService: mainService,
      additionalService: additionalService,
      description: description,
    }

    const response = await axios.put(`/editAppointment/${id}`, bodyObj)

    if(!response.data.error) {
      setEditMode(false)
    } else {
      alert(response.data.error)
    }
  }

  const changeEditMode = () => setEditMode(true)

  return (
    <tr>
      <DateCell 
        editing={editMode} 
        value={date}
        onValueChange={setDate}
      />
      <TimeCell 
        editing={editMode} 
        value={time}
        onValueChange={setTime}
      />
      <MainServiceCell 
        editing={editMode} 
        value={mainService}
        onValueChange={setMainService}
      />
      <AdditionalServiceCell 
        editing={editMode} 
        value={additionalService}
        onValueChange={setAdditionalService}
      />
      <DescriptionCell 
        editing={editMode} 
        value={description}
        onValueChange={setDescription}
      />
      <EditApptBtns 
        editing={editMode}
        bookClick={changeNormalMode}
        scheduleClick={changeEditMode}
        cancelClick={deleteFunction}
      />
    </tr>
  )
}

export default UpcomingApptsRow