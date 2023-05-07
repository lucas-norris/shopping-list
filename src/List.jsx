// Purpose: This file contains the List component which is used to display a list of items.
const List = ({ listItems }) => {
  return (
    <div className="List">
      <ul>
        {/* Use map method to iterate over listItems array and display each item in a list item. */}
        {listItems.map((item, index) => {
          return (
            <li className="list-item" key={index}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List
