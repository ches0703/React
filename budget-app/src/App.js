import { useState } from 'react';

import './App.css';
import ExpenseForm from './Comp/ExpenseForm';
import ExpenseList from './Comp/ExpenseList';
import Alert from './Comp/Alert';


function App() {

  const [expenses, setExpenses] = useState([
    {id: 1, charge: "랜트비", amount: 1000},
    {id: 2, charge: "식비", amount: 300},
    {id: 3, charge: "교통비", amount: 500}
  ])
  const [charge, setCharge] = useState("")
  const [amount, setAmount] = useState(0)
  const [alert, setAlert] = useState({show: false})
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState("")

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => {
      return expense.id !== id
    })
    setExpenses(newExpenses)
    handleAlert({
      type: "danger", 
      text: "item이 삭제되었습니다"
    })
  }

  const handleCharge = (e) =>{
    setCharge(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(charge !== "" && amount > 0){
      // 수정인 경우
      if(edit) {
        const newExpenses = expenses.map((item) => {
          return item.id === id ? {...item, charge, amount} : item 
        })
        setExpenses(newExpenses)
        setEdit(false)
        handleAlert({
          type: "success", 
          text: "아이템이 수정되었습니다."
        })
      } 
      // 생성인 경우
      else {
        const newExpense = {
          id: crypto.randomUUID(), 
          charge, 
          amount
        }
        const newExpenses = [...expenses, newExpense]
        setExpenses(newExpenses)
        handleAlert({
          type: "success", 
          text: "아이템이 생성되었습니다."
        })
      }
      setCharge("")
      setAmount(0)
    } else {
      // window.alert("Submit Error")
      handleAlert({
        type: "danger", 
        text: "charge는 빈 값일 수 없으며, amount는 0보다 커야 합니다"
      })
    }
  }

  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text})
    setTimeout(() => {
      setAlert({show: false})
    }, 7000)
  }

  const handleEdit = (id) => {
    const expense = expenses.find(item => item.id === id)
    const {charge, amount} = expense
    setId(id)
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
  }

  const handleClear = () => {
    setExpenses([])
  }

  return (
    <div className="main-container">

      {alert.show && <Alert type={alert.type} text={alert.text}></Alert> }

      <h1>예산 계산서</h1>
      
      {/* Expense From */}
      <div 
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "1rem"
        }}>
        <ExpenseForm 
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}>
        </ExpenseForm>
      </div>

      {/* Expense List */}
      <div 
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "1rem"
        }}>
        <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} handleClear={handleClear}></ExpenseList>
      </div>


      {/* Expense From */}
      <div 
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: "1rem"
        }}>
        <p style={{fontSize: "2rem"}}>
          총 지출: 
          <span>{
           expenses.reduce((acc, curr) => {
            return acc + curr.amount
           }, 0) 
          }</span>
        </p>

      </div>

    </div>
  );
}

export default App;
