import React from 'react'
import "./ExpenseList.css"
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
const ExpenseList = ({expenses, handleDelete, handleEdit, handleClear}) => {


  const arr1 = [1, 2, 3]
  const arr2 = [...arr1].reverse()
  console.log(arr2)

  return (
    <>
      <ul className='list'>
        {expenses.map((expense) => {
          return(
            <ExpenseItem 
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            ></ExpenseItem>
          )
        })}
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={handleClear}>
          목록 지우기
          <MdDelete className='btn-icon'></MdDelete>
        </button>
      )}
      
    </>
  )
}

export default ExpenseList