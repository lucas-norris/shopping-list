import { useState } from 'react'
import ListForm from './ListForm'
import List from './List'

const ListWrapper3 = () => {
  const [listItems, setListItems] = useState(['item 5'])

  const addListItem = (input) => {
    setListItems([...listItems, input])
    console.log(listItems)
  }

  return (
    <>
      <div className="wrapper">
        <h1>List 3</h1>
        <div className="ListWrapper">
          <List listItems={listItems} />
          <ListForm addListItem={addListItem} />
        </div>
      </div>
    </>
  )
}

export default ListWrapper3
