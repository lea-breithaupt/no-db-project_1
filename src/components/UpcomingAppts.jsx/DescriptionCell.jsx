
const DescriptionCell = ({ editing, value, onValueChange }) => {
  return editing ?(
    <td>
        <input 
            type="text"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
        />
    </td>
  ) : (
    <td>{value}</td>
  )
}

export default DescriptionCell