// Write your code here
import './index.css'

const todoItem = props => {
  const {details, deletetodo} = props
  const {id, title} = details
  const ondeletetodo = () => {
    deletetodo(id)
  }

  return (
    <li className="licon">
      <p className="para"> {title}</p>
      <button className="btn" type="button" onClick={ondeletetodo}>
        Delete
      </button>
    </li>
  )
}

export default todoItem
