import { useState } from 'react'
import ListForm from './ListForm'
import List from './List'

const ListWrapper = () => {
  const [listItems, setListItems] = useState(['item 1', 'item 2', 'item 3'])

  const addListItem = (input) => {
    setListItems([...listItems, input])
    console.log(listItems)
  }

  return (
    <>
      <div className="wrapper">
        <h1>List 1</h1>
        <div className="ListWrapper">
          <List listItems={listItems} />
          <ListForm addListItem={addListItem} />
        </div>
      </div>
    </>
  )
}

export default ListWrapper
