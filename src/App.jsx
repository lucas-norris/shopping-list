import { useRef, useState } from 'react'
import './App.css'
import ListWrapper from './ListWrapper1'
import ListWrapper2 from './ListWrapper2'
import ListWrapper3 from './ListWrapper3'
import DragDropContext from './DragDropContext'

function App() {
  const [listItems1, setListItems1] = useState(['item 1', 'item 2', 'item 3'])
  const [listItems2, setListItems2] = useState(['item 4'])
  const [listItems3, setListItems3] = useState(['item 5'])

  const dragItem = useRef()
  const dragOverItem = useRef()

  const dragStart = (e, position, list) => {
    dragItem.current = { position, list }
    console.log(dragItem.current)
    console.log(e.target.innerHTML)
  }

  const dragEnter = (e, position, list) => {
    dragOverItem.current = { position, list }
    console.log(e.target.innerHTML)
  }

  const drop = (e) => {
    const sourceListItems = dragItem.current.list
    console.log(sourceListItems)
    const destinationListItems = dragOverItem.current.list

    // Find the item being dragged in the source list
    const dragItemContent = sourceListItems[dragItem.current.position]

    // Remove the item from the source list
    sourceListItems.splice(dragItem.current.position, 1)

    // Add the item to the destination list at the specified position
    destinationListItems.splice(
      dragOverItem.current.position,
      0,
      dragItemContent
    )

    // Reset the drag and drop references
    dragItem.current = null
    dragOverItem.current = null

    // Update the state of the relevant lists
    if (sourceListItems === listItems1) {
      setListItems1([...sourceListItems])
    } else if (sourceListItems === listItems2) {
      setListItems2([...sourceListItems])
    } else if (sourceListItems === listItems3) {
      setListItems3([...sourceListItems])
    }

    if (destinationListItems === listItems1) {
      setListItems1([...destinationListItems])
    } else if (destinationListItems === listItems2) {
      setListItems2([...destinationListItems])
    } else if (destinationListItems === listItems3) {
      setListItems3([...destinationListItems])
    }
    console.log(e.target.innerHTML)
  }

  return (
    <>
      <DragDropContext.Provider
        value={{
          dragStart,
          dragEnter,
          dragItem,
          dragOverItem,
          listItems1,
          setListItems1,
          listItems2,
          setListItems2,
          listItems3,
          setListItems3,
          drop,
        }}
      >
        <div className="lists">
          <ListWrapper />
          <ListWrapper2 />
          <ListWrapper3 />
        </div>
      </DragDropContext.Provider>
    </>
  )
}

export default App
