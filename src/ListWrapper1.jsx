import { useContext } from 'react'
import ListForm from './ListForm'
import List from './List'
import DragDropContext from './DragDropContext'

//Create list wrapper component for list 1 - keep track of list items with useState hook.

const ListWrapper = () => {
  const dragInfo = useContext(DragDropContext)

  //Create addListItem function to add new list item to listItems array.
  const addListItem = (input) => {
    dragInfo.setListItems1([...dragInfo.listItems1, input])
    console.log(dragInfo.listItems1)
  }

  return (
    <>
      <div className="wrapper">
        <h1>List 1</h1>
        <div className="ListWrapper">
          <List listItems={dragInfo.listItems1} />
          <ListForm addListItem={addListItem} />
        </div>
      </div>
    </>
  )
}

export default ListWrapper
