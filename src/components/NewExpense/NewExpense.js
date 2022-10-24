import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const newExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
    setIsEditing(false);
  };
  const startEdtingHanlder = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && 
        <button className="AddExpenseBTN" onClick={startEdtingHanlder}>
          Add New Expense
        </button>
      }
      {isEditing && 
        <ExpenseForm
          onNewExpense={newExpenseHandler}
          onCancel={stopEditingHandler}
        />
      }
    </div>
  );
};
export default NewExpense;
