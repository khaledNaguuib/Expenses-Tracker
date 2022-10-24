import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // using multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  

  /* using single state
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /* Dealing with multiple states 
     setUserInput({
        ... userInput,
        enteredTitle: event.target.value,
     })

    Should use this instead of the above code whenever my state update depends on the previous state
     setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
     });

    */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* Dealing with multiple states 
     setUserInput({
        ... userInput,
        enteredAmount: event.target.value,
     })

    Should use this instead of the above code whenever my state update depends on the previous state
     setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value}
     });

    */
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* Dealing with multiple states 
     setUserInput({
        ... userInput,
        enteredDate: event.target.value,
     })

    Should use this instead of the above code whenever my state update depends on the previous state
     setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value}
     });

    */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),  
    };
    props.onNewExpense(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button className="cancelBTN" onClick={props.onCancel} >
           cancel
          </button>
          <button className="actionBTN" type="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
