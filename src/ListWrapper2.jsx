import { useContext } from 'react'
import ListForm from './ListForm'
import List from './List'
import DragDropContext from './DragDropContext'

//Repeat the process for ListWrapper2.jsx and ListWrapper3.jsx.

const ListWrapper2 = () => {
  //const [listItems, setListItems] = useState(['item 4'])
  const dragInfo = useContext(DragDropContext)

  const addListItem = (input) => {
    dragInfo.setListItems2([...dragInfo.listItems2, input])
    console.log(dragInfo.listItems2)
  }

  // const drop = (e) => {
  //   const copyListItems = [...listItems]
  //   const dragItemContent = copyListItems[dragInfo.dragItem.current]
  //   copyListItems.splice(dragInfo.dragItem.current, 1)
  //   copyListItems.splice(dragInfo.dragOverItem.current, 0, dragItemContent)
  //   dragInfo.dragItem.current = null
  //   dragInfo.dragOverItem.current = null
  //   setListItems(copyListItems)
  //   console.log(e.target.innerHTML)
  // }

  return (
    <>
      <div className="wrapper">
        <h1>List 2</h1>
        <div className="ListWrapper">
          <List listItems={dragInfo.listItems2} />
          <ListForm addListItem={addListItem} />
        </div>
      </div>
    </>
  )
}

export default ListWrapper2
