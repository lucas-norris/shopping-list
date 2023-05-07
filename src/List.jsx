import { useContext } from 'react'
import DragDropContext from './DragDropContext'

// Purpose: This file contains the List component which is used to display a list of items.
const List = ({ listItems }) => {
  const dragInfo = useContext(DragDropContext)
  return (
    <div className="List">
      <ul>
        {/* Use map method to iterate over listItems array and display each item in a list item. */}
        {listItems.map((item, index) => {
          return (
            <li
              className="list-item"
              onDragStart={(e) => dragInfo.dragStart(e, index, listItems)}
              onDragEnter={(e) => dragInfo.dragEnter(e, index, listItems)}
              onDragEnd={dragInfo.drop}
              key={index}
              draggable
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List
