import React from 'react'

const DateCell = ({ editing, value, onValueChange }) => {
  return editing ?(
    <td>
      <input 
        type="date"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>{value}</td>
  )
}

export default DateCell