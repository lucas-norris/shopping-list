import { useState } from 'react'
import ListForm from './ListForm'
import List from './List'

//Repeat the process for ListWrapper2.jsx and ListWrapper3.jsx.

const ListWrapper2 = () => {
  const [listItems, setListItems] = useState(['item 4'])

  const addListItem = (input) => {
    setListItems([...listItems, input])
    console.log(listItems)
  }

  return (
    <>
      <div className="wrapper">
        <h1>List 2</h1>
        <div className="ListWrapper">
          <List listItems={listItems} />
          <ListForm addListItem={addListItem} />
        </div>
      </div>
    </>
  )
}

export default ListWrapper2
