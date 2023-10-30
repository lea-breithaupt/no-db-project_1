
const MainServiceCell = ({ editing, value, onValueChange }) => {
  return editing ? (
    <td>
      <select value={value} onChange={(e) => onValueChange(e.target.value)}>
        <option value="Trim - 30min">Trim - 30min</option>
        <option value="Major Cut - 60 min">Major Cut - 60min</option>
        <option value="None">None</option>
      </select>
    </td>
  ) : (
    <td>{value}</td>
  )
}

export default MainServiceCell