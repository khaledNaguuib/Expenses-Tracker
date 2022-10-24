import react, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  console.log(filteredYear);
  const dropDownChangeHanlder = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filter the whole array of expenses to show only the ones that match the selected year
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onDropDownChange={dropDownChangeHanlder}
        />
        <ExpensesChart expenses={filteredExpenses}/>
         <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
