import React from 'react'

const EditApptBtns = ({ editing, bookClick, scheduleClick, cancelClick }) => {
  return editing ? (
    <td>
      <button className='editBtns' onClick={bookClick}>Book!</button>
    </td>
  ): (
    <td>
      <button className='editBtns' onClick={cancelClick}>Cancel Appointment</button>
      <button className= 'editBtns' onClick={scheduleClick}>Schedule Appointment</button>
    </td>
  )
}

export default EditApptBtns