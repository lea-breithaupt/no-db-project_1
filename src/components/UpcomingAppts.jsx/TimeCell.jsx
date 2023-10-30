
const TimeCell = ({ editing, value, onValueChange }) => {
  return editing ? (
    <td>
      <input 
        type="time"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>{value}</td>
  )
}

export default TimeCell