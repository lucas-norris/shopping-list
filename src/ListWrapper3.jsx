import { useContext } from 'react'
import ListForm from './ListForm'
import List from './List'
import DragDropContext from './DragDropContext'

const ListWrapper3 = () => {
  const dragInfo = useContext(DragDropContext)

  const addListItem = (input) => {
    dragInfo.setListItems3([...dragInfo.listItems3, input])
    console.log(dragInfo.listItems3)
  }

  return (
    <>
      <div className="wrapper">
        <h1>List 3</h1>
        <div className="ListWrapper">
          <List listItems={dragInfo.listItems3} />
          <ListForm addListItem={addListItem} />
        </div>
      </div>
    </>
  )
}

export default ListWrapper3
