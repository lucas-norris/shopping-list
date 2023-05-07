import { useState } from 'react'

//Create ListForm component to add new list item to listItems array.

const ListForm = ({ addListItem }) => {
  //Create input state to keep track of input value.
  const [input, setInput] = useState('')

  //Create handleSubmit function to add new list item to listItems array.
  const handleSubmit = (e) => {
    e.preventDefault()
    addListItem(input)
    setInput('')
  }
  return (
    //Create form with input and button to add new list item to listItems array.
    <form className="ListForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="list-item-input"
        value={input}
        placeholder="New item..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="list-item-button">
        Go
      </button>
    </form>
  )
}

export default ListForm
