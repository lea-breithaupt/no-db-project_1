
const AdditionalServiceCell = ({ editing, value, onValueChange }) => {
  return editing ?(
    <td>
        <select value={value} onChange={(e) => onValueChange(e.target.value)}>
            <option value="Partial Color - 90min">Partial Color - 90min</option>
            <option value="Full Color - 120min">Full Color - 120min</option>
            <option value="Volumizing Blow Out - 45min">Volumizing Blow Out - 45min</option>
            <option value="None">None</option>
        </select>
    </td>
  ) : (
    <td>{value}</td>
  )
}

export default AdditionalServiceCell